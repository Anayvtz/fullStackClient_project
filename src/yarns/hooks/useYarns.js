import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import { createYarn, deleteYarn, editYarn, getYarn, getYarnBySize } from "../services/yarnsApiService";
import useAxios from "../../utils/hooks/useAxios";
import axios from "axios";
import ROUTES from "../../routes/routesModel";

export default function useYarns() {
    const [yarns, setYarns] = useState([]);
    const [yarn, setYarn] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [filterYarns, setFilterYarns] = useState(null);
    const [query, setQuery] = useState("");
    const [searchParams] = useSearchParams();

    const { user } = useCurrentUser();
    const setSnack = useSnack();
    const navigate = useNavigate();

    const apiUrl = "http://localhost:8185/yarns";

    useEffect(() => {
        setQuery(searchParams.get("q") ?? "");
    }, [searchParams]);

    useEffect(() => {
        if (yarns)
            setFilterYarns(
                yarns.filter(
                    (yarn) =>
                        yarn.title.includes(query) || String(yarn.yarnSize).includes(query)
                )
            );
    }, [yarns, query]);

    const requestStatus = (loading, errorMessage, yarns, yarn = null) => {
        setIsLoading(loading);
        setError(errorMessage);
        setYarns(yarns);
        setYarn(yarn);
    };
    useAxios();


    const getAllYarns = useCallback(async () => {
        setIsLoading(true);
        try {

            let response = await axios.get(
                apiUrl
            );
            setYarns(response.data);
            setSnack("success", "All yarns are here!");
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    const getYarnById = useCallback(async (id) => {
        try {
            const response = await axios.get(
                `${apiUrl}/${id}`
            );
            const data = response.data;
            setYarn(data);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    const handleCreateYarn = useCallback(
        async (yarnFromClient) => {
            setIsLoading(true);
            try {



                const yarnAndStock = await createYarn(yarnFromClient);
                requestStatus(false, null, null, yarnAndStock.yarn);
                setSnack("success", "A new yarn has been created");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
                return yarnAndStock.yarn;
            } catch (error) {
                requestStatus(false, error, null);
                setSnack("error", error.message);
                console.log("handleCreateYarn ret err:", error.message);

            }
            setIsLoading(false);
        },
        [setSnack, navigate]
    );



    const handleDelete = useCallback(async (yarnId) => {
        try {
            setIsLoading(true);
            await deleteYarn(yarnId);
            setYarns((prevYarns) => prevYarns.filter((yarn) => yarn._id !== yarnId));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }, []);

    const handleUpdateYarn = useCallback(
        async (yarnId, yarnFromClient) => {
            try {
                setIsLoading(true);

                const yarnAndStock = await editYarn(yarnId, yarnFromClient);
                requestStatus(false, null, null, yarnAndStock.yarn);
                setSnack("success", "The yarn has been successfully updated");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [setSnack, navigate]
    );

    const handleGetYarn = useCallback(async (yarnId) => {
        try {
            setIsLoading(true);
            const yarn = await getYarn(yarnId);
            requestStatus(false, null, null, yarn);
            return yarn;
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, []);

    const handleGetYarnBySize = useCallback(async (size) => {
        try {
            setIsLoading(true);
            const yarns = await getYarnBySize(size);
            requestStatus(false, null, yarns);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, [user]);

    return {
        yarns,
        setYarns,
        yarn,
        filterYarns,
        error,
        isLoading,
        getAllYarns,
        getYarnById,
        handleDelete,
        handleCreateYarn,
        handleGetYarnBySize,
        handleUpdateYarn,
        handleGetYarn,
    };
}
