import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {

    const { user } = useContext(AuthContext)
    const isAuthenticated = !!user;

    console.log("Protected Route Auth Status:", isAuthenticated);

    if(!isAuthenticated){
        return <Navigate to="/" replace/>
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes;