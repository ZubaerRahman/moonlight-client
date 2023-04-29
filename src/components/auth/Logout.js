import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSession';
import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch();

    console.log("Logging out from url...")
    dispatch(logout())
    console.log("Logged out from url.")
    return (
        <Navigate to="/login" />
    )
}

export default Logout;
