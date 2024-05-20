import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequiedAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequiedAuth;