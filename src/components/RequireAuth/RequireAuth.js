/* eslint-disable react/prop-types */
import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.find(role => auth?.role.includes(role)) 
            ?   <Outlet />
            :   auth 
                ?   <Navigate to="/unauthorized" state={{ from: location }} replace />
                :   <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;

