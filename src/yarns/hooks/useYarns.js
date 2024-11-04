import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useSnack } from "../../utils/providers/SnackbarProvider";

export default function useYarns() {
    const [yarns, setYarns] = useState([]);
    const [yarn, setYarn] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [filterYarns, setFilterYarns] = useState(null);
    const [query, setQuery] = useState("");
    const [searchParams] = useSearchParams();

    const user = useCurrentUser();
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
                        yarn.title.includes(query) || String(yarn.size).includes(query)
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
            try {
                setIsLoading(true);


                const yarn = await createCard(yarnFromClient);
                requestStatus(false, null, null, card);
                setSnack("success", "A new business card has been created");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
            } catch (error) {
                requestStatus(false, error, null);
                setSnack("error", error.message);
            }
        },
        [setSnack, navigate]
    );
    const handleGetMyCards = useCallback(async () => {
        try {
            setIsLoading(true);
            const cards = await getMyCards();
            requestStatus(false, null, cards);
        } catch (error) {
            requestStatus(false, error, null);
            setSnack("error", error.message);
        }
    }, [setSnack]);


    const handleDelete = useCallback(async (cardId) => {
        try {
            setIsLoading(true);
            await deleteCard(cardId);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }, []);

    const handleUpdateCard = useCallback(
        async (cardId, cardFromClient) => {
            try {
                setIsLoading(true);
                const card = await editCard(cardId, cardFromClient);
                requestStatus(false, null, null, card);
                setSnack("success", "The business card has been successfully updated");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [setSnack, navigate]
    );

    const handleGetCard = useCallback(async (cardId) => {
        try {
            setIsLoading(true);
            const card = await getCard(cardId);
            requestStatus(false, null, null, card);
            return card;
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, []);

    const handleLike = useCallback(
        async (cardId) => {
            try {
                await changeLikeStatus(cardId);
                setSnack("success", "The business card has been Liked");
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [setSnack]
    );

    const handleGetFavCards = useCallback(async () => {
        try {
            setIsLoading(true);
            const cards = await getCards();
            console.log("cards are:" + cards);
            console.log("user id is:" + user.user._id);


            const favCards = cards.filter((card) => card.likes.includes(user?.user?._id));
            requestStatus(false, null, favCards);
        } catch (error) {
            requestStatus(false, error, null);
        }
    }, [user]);

    return {
        yarns,
        yarn,
        filterYarns,
        error,
        isLoading,
        getAllYarns,
        getYarnById,
        handleDelete,
        handleLike,
        handleCreateYarn,
        handleGetMyCards,
        handleUpdateCard,
        handleGetCard,
        handleGetFavCards,
    };
}
