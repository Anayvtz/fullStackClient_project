import { Container } from "@mui/material";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import yarnSchema from "../../schemas/yarnSchema";
import { useCurrentUser } from "../../user/providers/UserProvider";
import initialYarnForm from "../helpers/initialForm/initialYarnForm";
import mapYarnToModel from "../helpers/normalization/mapYarnToModel";
import normalizeYarn from "../helpers/normalization/normalizeYarn";
import useYarns from "../hooks/useYarns";
import YarnForm from "../components/YarnForm";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import InitialYarnCtor from "../helpers/initialForm/initialYarnCtor";

export default function YarnEditPage() {
    //what do we need in this page
    //id of the card - useParams
    const { id } = useParams();
    //handleUpdateCard & handleGetCard & card - useCards
    const {
        handleUpdateYarn,
        handleGetYarn,
        yarn,
    } = useYarns();

    //user - useUser (provider)
    const { user } = useCurrentUser();
    //useForm (initialForm,schema,onSubmit)
    const { data, setData, errors, ...rest } = useForm(
        initialYarnForm,
        yarnSchema,
        () => {
            handleUpdateYarn(yarn._id, {
                ...normalizeYarn({ ...data }),

            });
        }
    );
    //useEffect - update the form data to this card data
    useEffect(() => {
        handleGetYarn(id).then((data) => {
            const modelYarn = mapYarnToModel(data);
            setData(modelYarn);
        });
    }, [handleGetYarn, setData, id]);

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);  // Append the file
        formData.append('yarnId', yarn._id);
        console.log("YarnEditPage.handleImageUpload formData:", formData);

        try {
            const response = await fetch('http://localhost:8185/upload-image', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.imageurl) {
                setData((prevData) => ({
                    ...prevData,
                    imageurl: data.imageurl, // Set the returned image URL
                }));
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    if (!user) return <Navigate replace to={ROUTES.YARNS} />;
    console.log("YarnEditPage. data:", data);

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <YarnForm
                title="edit yarn"
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                errors={errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
                data={data}
                onImageUpload={handleImageUpload} // Pass image upload handler
            />
        </Container>
    );
}
