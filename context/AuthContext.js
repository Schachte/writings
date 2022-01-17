import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext()

export const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // Register
    const register = async (user) => {
    }

    // Login 
    const login = async (user) => {
    }

    // Logout
    const logout = async (user) => {
    }

    // Check if logged in

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext