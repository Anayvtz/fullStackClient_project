import { Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import YarnHeaderComponent from "./YarnHeaderComponent";
import YarnActionBar from "./YarnActionBar";

export default function YarnComponent({
    yarn,
    handleDelete,
    handleEdit,
}) {
    const navigate = useNavigate();
    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardActionArea
                onClick={() => navigate(ROUTES.YARN_INFO + "/" + yarn._id)}
            >
                <YarnHeaderComponent
                    image={yarn.image.url}
                    alt={yarn.image.alt}
                    title={yarn.title}
                    subtitle={yarn.subtitle}
                />

            </CardActionArea>
            <YarnActionBar
                yarnId={yarn._id}
                yarnImage={yarn.image}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </Card>
    );
}
