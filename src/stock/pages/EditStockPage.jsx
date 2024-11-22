import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useStocks from '../hooks/useStocks';
import { useCurrentUser } from '../../user/providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import initialStockForm from '../helpers/initialForm/initialStockForm';
import stockSchema from '../../schemas/stockSchema';
import mapStockToModel from '../helpers/normalization/mapStockToModel';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import StockForm from '../components/StockForm';

export default function EditStockPage() {
    //what do we need in this page
    //id of the card - useParams
    const { id } = useParams();
    //handleUpdateCard & handleGetCard & card - useCards
    const {
        handleUpdateStock,
        handleGetStock,
        stock,
    } = useStocks();
    const navigate = useNavigate();
    //user - useUser (provider)
    const { user } = useCurrentUser();
    //useForm (initialForm,schema,onSubmit)
    const { data, setData, errors, ...rest } = useForm(
        initialStockForm,
        stockSchema,
        () => {
            handleUpdateStock(stock._id, {
                ...data
            });
            navigate(ROUTES.STOCKS);
        }
    );
    //useEffect - update the form data to this card data
    useEffect(() => {
        handleGetStock(id).then((data) => {
            const modelStock = mapStockToModel(data);
            setData(modelStock);
        });
    }, [handleGetStock, setData, id]);

    const validateForm = () => { return true; }

    if (!user) return <Navigate replace to={ROUTES.STOCKS} />;

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <StockForm
                title="edit stock"
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                errors={errors}
                onFormChange={validateForm}
                onInputChange={rest.handleChange}
                data={data}

            />
        </Container>
    );
}

