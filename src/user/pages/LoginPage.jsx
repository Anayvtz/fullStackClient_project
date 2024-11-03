import React from 'react'
import useUsers from '../hooks/useUsers';
import useForm from '../../forms/hooks/useForm';
import { useCurrentUser } from '../providers/UserProvider';
import { Form, Link, Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Button, Container, Grid, Input } from '@mui/material';
import PageHeader from '../../utils/pages/PageHeader';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import initialLoginForm from '../helpers/initialForms/initialLoginForm';
import loginSchema from '../../schemas/loginSchema';

export default function LoginPage() {
    const { handleLogin } = useUsers();
    const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
        useForm(initialLoginForm, loginSchema, handleLogin);



    const { user } = useCurrentUser();

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return (
        <Container>
            <PageHeader
                title="Welcome to Login page"
                subtitle="here you can log in"
            />
            <Container
                sx={{
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Form
                    title="login"
                    styles={{ maxWidth: "450px" }}
                    to={ROUTES.ROOT}
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                >
                    <Input
                        label="email"
                        name="email"
                        type="email"
                        error={errors.email}
                        onChange={handleChange}
                        data={data}
                    />
                    <Input
                        label="password"
                        name="password"
                        type="password"
                        error={errors.password}
                        onChange={handleChange}
                        data={data}
                    />
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to={ROUTES.SIGNUP}
                            startIcon={<AccountBoxIcon />}
                            sx={{ width: "100%" }}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Form>
            </Container>
        </Container>
    );
}


