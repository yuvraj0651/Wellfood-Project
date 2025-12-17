import React from "react";
import { Navigate } from "react-router";

const withAuth = (WrappedComponent) => {
    return function EnhancedFn(props) {

        const isLoggedIn = localStorage.getItem("token");

        if (!isLoggedIn) {
            return <Navigate to="/login" />
        }

        return <WrappedComponent {...props} />
    }
}