import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import variables from './styles/themes/variables'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilesPage from './pages/ProfilesPage';
import UserPage from './pages/UserPage';
import PrivatePage from './pages/PrivatePage'
import PrivateAdmPage from './pages/PrivateAdmPage'
import Unauthorized from './pages/Unauthorized'
import RequireAuth from './components/RequireAuth'

const ROLES = {
  'user': 'user',
  'admin': 'admin'
}

const App = () => {
  return (
    <ThemeProvider theme={variables}>
        <Header />
        
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profiles" element={<ProfilesPage />} /> 
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.user, ROLES.admin]} />}>
            <Route path="/private" element={<PrivatePage />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
            <Route path="/dashboard" element={<PrivateAdmPage />} />
          </Route>
        </Routes>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;
