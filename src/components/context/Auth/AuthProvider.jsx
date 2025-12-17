import { useEffect, useState } from "react";
import AuthContext from "../Auth/AuthContext";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        let storedUser = localStorage.getItem("auth_user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("auth_user", JSON.stringify(user));
        } else {
            localStorage.removeItem("auth_user");
        }
    }, [user]);

    const login = (userData, email) => {
        const role = email === "admin@gmail.com" ? "admin" : "user";

        const newUser = {
            ...userData,
            email, role
        };
        setUser(newUser);
    };

    const logOut = () => {
        setUser(null);
        localStorage.removeItem("auth_user");
    }

    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;