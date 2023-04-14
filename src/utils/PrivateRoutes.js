import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

export default function PrivateRoutes() {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}
