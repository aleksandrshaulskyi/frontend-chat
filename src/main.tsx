import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/auth/login/Login'
import SignUp from './pages/auth/signup/SignUp'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='signup/' element={<SignUp />} />
        <Route path='login/' element={<Login />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
