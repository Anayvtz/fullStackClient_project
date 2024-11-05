import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function AddNewYarnButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(ROUTES.CREATE_YARN);
    }
    return (
        <div>
            <Button variant="contained" sx={{ borderRadius: "50%", aspectRatio: "1/1" }} onClick={handleClick}>+</Button>
        </div>
    )
}
