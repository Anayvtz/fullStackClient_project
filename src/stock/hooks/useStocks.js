import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../user/providers/UserProvider";
import { useSnack } from "../../utils/providers/SnackbarProvider";
import axios from "axios";
import { useCallback, useState } from "react";

export default function useStocks() {
    const [stocks, setStocks] = useState([]);
    const [stock, setStock] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    const { user } = useCurrentUser();
    const setSnack = useSnack();
    const navigate = useNavigate();

    const apiUrl = "http://localhost:8185/stocks";

    const getAllStocks = useCallback(async () => {
        setIsLoading(true);
        try {
            const stocks = await axios.get(apiUrl);
            console.log("getAllStocks. stocks:", stocks);

            setStocks(stocks.data);
            setIsLoading(false);
            setSnack("success", "all stocks are retrieved");

            return stocks.data;

        } catch (error) {
            console.error("Error getAllStocks making request:", error.message); // Log error message
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received for the request:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error setting up the request:", error.message);
            }
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    const handleDelete = useCallback(async (stockId) => {
        setIsLoading(true);
        try {
            const stocks = await axios.delete(`${apiUrl}/${stockId}`);
            setStocks(stocks);
            setIsLoading(false);
            setSnack("success", `stock ${stockId} has been deleted`);

            return stocks;

        } catch (error) {
            console.error("Error getAllStocks making request:", error.message); // Log error message
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
                console.error("Error response headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received for the request:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error setting up the request:", error.message);
            }
            setError(error.message);
            setSnack("error", error.message);
        }
        setIsLoading(false);
    }, []);

    return {
        stocks,
        stock,
        error,
        isLoading,
        getAllStocks,
        handleDelete
    }
}