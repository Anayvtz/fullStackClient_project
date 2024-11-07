import { Container, Typography } from "@mui/material";
import PageHeader from "./PageHeader";

export default function AboutPage() {
    return (
        <Container>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find our warm introduction"
            />
            <Container
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h6">About Page</Typography>
                    <Typography variant="body1" paragraph>
                        we are an online yarn shop and we are proud of it. we have many kinds of yarns for both knit and corchet. whatever project you want to do we have the yarn for it. enjoy and share us with your beautiful results .
                    </Typography>
                </Container>
                <Container sx={{ flex: 1 }}>
                    <img
                        src="/images/logo.jpg"
                        alt="logo"
                        style={{ width: "100%", maxWidth: 400 }}
                    />
                </Container>
            </Container>
        </Container>
    );
}
