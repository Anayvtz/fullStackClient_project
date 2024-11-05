import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../../user/providers/UserProvider";
import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ROUTES from "../../../routes/routesModel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import YarnAmountControl from "./YarnAmountControl";
import useUsers from "../../../user/hooks/useUsers";

export default function YarnActionBar({
    yarnId,
    yarnImage,
    handleDelete,
    handleEdit
}) {
    const user = useCurrentUser();
    const navigate = useNavigate();
    const { handleAddYarnToCart, handleRmvYarnFromCart } = useUsers();
    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            {user?.user?.isAdmin ? (
                <Box>

                    <IconButton onClick={() => handleDelete(yarnId)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => navigate(`${ROUTES.EDIT_YARN}/${yarnId}`)}>
                        <ModeEditIcon />
                    </IconButton>
                </Box>) : null}
            {!user?.user?.isAdmin ? (
                <Box>
                    <IconButton onClick={() => handleRmvYarnFromCart(yarnId)}>
                        <DeleteIcon />
                    </IconButton>

                    <YarnAmountControl handleAddToCart={handleAddYarnToCart} yarnId={yarnId} yarnImage={yarnImage} />
                </Box>) : null}
        </CardActions >
    );
}