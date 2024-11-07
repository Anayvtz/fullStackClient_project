import { jwtDecode } from "jwt-decode";

const TOKEN = "my token";
const EMAIL = "my email";

export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
}

export const removeToken = () => localStorage.removeItem(TOKEN);
export const getToken = () => localStorage.getItem(TOKEN);

export const getUser = () => {
    try {
        const myToken = getToken();
        console.log("getUser: mytoken:", myToken);

        const user = jwtDecode(myToken);
        console.log("get user: user:", user);
        return user;

    } catch (err) {
        return null;
    }
};

export const setEmailInLocalStorage = (email) => {
    localStorage.setItem(EMAIL, email);
}

export const removeEmail = () => localStorage.removeItem(EMAIL);
export const getEmail = () => localStorage.getItem(EMAIL);