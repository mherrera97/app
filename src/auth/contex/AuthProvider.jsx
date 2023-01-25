import React, { useReducer } from 'react'
import { AuthContex } from './AuthContex'
import { authReducer } from './authReducer';

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { logged: false });
    return (
        <AuthContex.Provider>
            {children}
        </AuthContex.Provider>
    )
}
