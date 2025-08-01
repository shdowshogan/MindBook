import { Navigate } from "react-router-dom";
import React from 'react'

const ProtectedRoute = ({children}) => {
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' replace/>;
    }
  return children;
}

export default ProtectedRoute;
