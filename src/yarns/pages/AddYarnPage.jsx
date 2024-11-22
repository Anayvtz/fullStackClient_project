import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import yarnSchema from "../../schemas/yarnSchema";
import { useCurrentUser } from "../../user/providers/UserProvider";
import initialYarnForm from "../helpers/initialForm/initialYarnForm";
import normalizeYarn from "../helpers/normalization/normalizeYarn";
import useYarns from "../hooks/useYarns";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import YarnForm from "../components/YarnForm";
import { useState } from "react";
import axios from "axios";

export default function AddYarnPage() {
    const { user } = useCurrentUser();
    const { yarn, handleCreateYarn } = useYarns();

    const { data, setData, errors, ...rest } = useForm(
        initialYarnForm,
        yarnSchema,
        () => {
            handleCreateYarn({
                ...normalizeYarn({ ...data }),
            });
        }
    );

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            setLoading(true);

            // Step 1: Create Yarn without the image
            /* const response = await axios.post('http://localhost:8185/yarns', formData);
            const newYarn = response.data; */
            const newYarn = await handleCreateYarn({
                ...normalizeYarn({ ...data }),
            });

            // Step 2: If there's an image, upload it after creating the yarn

            if (formData.image.imageurl) {

                const formDataImage = new FormData();
                formDataImage.append('image', formData.image.imageurl);  // Assuming imageurl is a file
                formDataImage.append('yarnId', newYarn?._id);  // Add yarnId to associate image with yarn

                const imageResponse = await axios.post('http://localhost:8185/upload-image', formDataImage);
                const updatedYarn = imageResponse.data;

                // Optionally, update the form with the new image URL
                setData((prevData) => ({
                    ...prevData,
                    imageurl: updatedYarn.imageurl,
                }));
            }

            setLoading(false);
        } catch (error) {
            console.error('Error adding yarn:', error);
            setLoading(false);
        }
    };

    const handleImageUpload = (file) => {
        // You can use this method to update the data state with the selected image
        setData((prevData) => ({
            ...prevData,
            image: { imageurl: file, },
        }));
    };

    const validateForm = () => { return true; }

    //useEffect - update the form data to this card data

    if (!user) return <Navigate replace to={ROUTES.YARNS} />;

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
                title="add yarn"
                onSubmit={handleSubmit}
                onReset={rest.handleReset}
                errors={errors}
                onFormChange={validateForm}
                onInputChange={rest.handleChange}
                data={data}
                onImageUpload={handleImageUpload}
            />
        </Container>
    );
}
