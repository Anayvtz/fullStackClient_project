import React, { createContext, useContext, useEffect, useState } from 'react'
import { getEmail, getToken, getUser } from '../services/localStorageService';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getToken());
    const [email, setEmail] = useState(getEmail());
    useEffect(() => {
        if (!user) {
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage);
        }
        setEmail(getEmail());
    }, [user, email]);
    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
}

export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useCurrentUser must be used within provider");
    }

    return context;
};

