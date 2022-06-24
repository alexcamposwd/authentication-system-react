/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  // *********** Logout - User ***********
  const logout = () => {
    localStorage.removeItem('token')

    api.defaults.headers.Authorization = null

    setAuth({})
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isLogged,
        setIsLogged,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('User Provider is missing')
  return context
}
