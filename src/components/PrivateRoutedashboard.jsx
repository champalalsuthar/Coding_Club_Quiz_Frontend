import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateRoute = ({ isLoggedIn, children }) => {
    // if (!setDashOrNot) {
    //     if (!isLoggedIn) {
    //         return children;
    //     }
    //     else {
    //         return <Navigate to="/dashboard" />
    //     }
    // }
    // else {
    //     if(isLoggedIn){
    //         return children;
    //     }
    //     else{
    //         return <Navigate to="/login"/>
    //     }
    // }
    // const Navigate= useNavigate()
    if (isLoggedIn) {

        return children;
    }
    else {
        toast.error("Please Login First", {
            position: toast.POSITION.TOP_CENTER,
        });
        return <Navigate to="/login" />
    }

}
export default PrivateRoute;