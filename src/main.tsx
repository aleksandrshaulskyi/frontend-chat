import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/index/Index'
import LogIn from './pages/auth/login/LogIn'
import SignUp from './pages/auth/signup/SignUp'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='signup/' element={<SignUp />} />
        <Route path='login/' element={<LogIn />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
