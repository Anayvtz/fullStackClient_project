import { Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import YarnHeaderComponent from "./YarnHeaderComponent";
import YarnActionBar from "./YarnActionBar";
import { useCurrentUser } from "../../../user/providers/UserProvider";
import FetchImage from "../FetchImage";
import YarnBody from "./YarnBody";

export default function YarnComponent({
    yarn,
    handleDelete,
    handleEdit,
}) {
    const navigate = useNavigate();
    const { user } = useCurrentUser();
    console.log("YarnComponent. userid:", user?._id);

    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardActionArea
                onClick={() => navigate(ROUTES.YARN_INFO + "/" + yarn._id)}
            >
                <YarnHeaderComponent
                    image={"http://localhost:8185/" + yarn.image.imageurl}
                    alt={yarn.image.alt}
                    title={yarn.title}
                    subtitle={yarn.subtitle}
                />
                <YarnBody quantity={yarn.quantityInStock} />
            </CardActionArea>
            <YarnActionBar
                yarnId={yarn._id}
                yarnImage={yarn.image}
                yarnPrice={yarn.price}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </Card>
    );
}
