import { Container } from "@mui/material";
import { useCurrentUser } from "../../user/providers/UserProvider";
import YarnComponent from "./yarn/YarnComponent";
import AddNewYarnButton from "./AddNewYarnButton";

export default function Yarns({ yarns, handleDelete, handleEdit }) {
    const user = useCurrentUser();

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {yarns.map((yarn) =>
                console.log("Yarns. yarn:", yarn))}
            {yarns.map((yarn) => (
                <YarnComponent
                    yarn={yarn}
                    key={yarn._id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}


            {(user?.user?.isAdmin) ? <AddNewYarnButton /> : null}

        </Container>
    );
}
