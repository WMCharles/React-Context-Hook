import { Outlet, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function PrivateRoutes() {
    let {user} = useContext(AuthContext)
    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}
