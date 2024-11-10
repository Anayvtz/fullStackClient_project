import { Navigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import signupSchema from "../../schemas/signupSchema";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import { useCurrentUser } from "../providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {
    const { handleRegister } = useUsers();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialSignupForm, signupSchema, handleRegister);

    const { user } = useCurrentUser();

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SignupForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"register form"}
                errors={errors}
                data={data}
                onInputChange={handleChange}
                handleChangeCheckBox={handleChangeCheckBox}
            />
        </Container>
    );
}