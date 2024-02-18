import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoutelogin=({isLoggedIn ,children})=>
{
    if(!isLoggedIn){
        return children;
    }
    else{
        return <Navigate to="/dashboard"/>
    }
  
}
export default PrivateRoutelogin;