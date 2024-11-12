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
    yarnPrice,
    handleDelete,
    handleEdit
}) {
    const { user } = useCurrentUser();
    const navigate = useNavigate();
    const { handleRmvYarnFromCart } = useUsers();
    /* handleAddYarnToCart(userId, { yarnId: yarnId, image: yarnImage, quantity: 1 }); */
    console.log("YarnActionBar: userid:", user?._id);



    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            {user?.isAdmin ? (
                <Box>

                    <IconButton onClick={() => handleDelete(yarnId)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => navigate(`${ROUTES.EDIT_YARN}/${yarnId}`)}>
                        <ModeEditIcon />
                    </IconButton>
                </Box>) : null}
            {!user?.isAdmin ? (
                <Box>
                    <IconButton onClick={async () => await handleRmvYarnFromCart(yarnId)}>
                        <DeleteIcon />
                    </IconButton>

                    <YarnAmountControl userId={user?._id} yarnId={yarnId} yarnImage={yarnImage} yarnPrice={yarnPrice} />
                </Box>) : null}
        </CardActions >
    );
}