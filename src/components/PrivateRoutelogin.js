import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoutelogin = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return children;
    }
    else {
        // window.location.reload();
        return <Navigate to="/dashboard" />
        // return NULL;
    }

}
export default PrivateRoutelogin;