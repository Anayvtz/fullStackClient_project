import { useParams } from "react-router-dom";
import useYarns from "../hooks/useYarns";
import { useEffect } from "react";
import Spinner from "../../utils/others/Spinner";
import Error from "../../utils/others/Error";
import { CardMedia, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import PageHeader from "../../utils/pages/PageHeader";

export default function YarnDetailsPage() {
    const { yarn, isLoading, error, getYarnById } = useYarns();
    const { id } = useParams();

    useEffect(() => {
        getYarnById(id);
    }, [id]);

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;

    return (
        <Container sx={{ mt: 4 }}>
            <PageHeader
                title="Yarn Details"
                subtitle="Here you can find detailed information about the yarn"
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: "100%",
                            height: 300,
                            objectFit: "cover",
                            borderRadius: 2,
                        }}
                        image={"http://localhost:8185/" + yarn.image.imageurl}
                        alt={yarn.image.alt}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Typography variant="h5" component="div" gutterBottom>
                            {yarn.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {yarn.subtitle}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>yarnSize:</strong> {yarn.yarnSize}
                        </Typography>
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>QuantityInStock:</strong> {yarn.quantityInStock}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>Price:</strong> {yarn.price}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">
                            {yarn.description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}