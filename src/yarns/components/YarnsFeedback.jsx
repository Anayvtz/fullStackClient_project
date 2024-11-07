import { Typography } from "@mui/material";
import Error from "../../utils/others/Error";
import Spinner from "../../utils/others/Spinner";
import Yarns from "./Yarns";

export default function YarnsFeedback({
    isLoading,
    yarns,
    error,
    handleDelete,
}) {
    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (yarns && yarns.length === 0)
        return (
            <Typography m={2}>
                Oops... it seems there are no yarns in the shop
            </Typography>
        );

    if (yarns)
        return (
            <Yarns
                yarns={yarns}
                handleDelete={handleDelete}
            />
        );

    return null;
}
