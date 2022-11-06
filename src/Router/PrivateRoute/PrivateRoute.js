import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading === true) {
        return <div>Loading...</div>
    }


    if (user) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;