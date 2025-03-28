import './App.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Toaster } from "sonner";
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import VerifyOtp from './pages/auth/VerifyOtp';
import ForgotPw from './pages/auth/ForgotPw';
import ResetPw from './pages/auth/ResetPw';
import Companies from './pages/Companies';
import Navbar from './components/Navbar';
import Reservations from './pages/Reservations';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import CompanyById from './pages/CompanyById';




function AppContext(){

  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/auth"); 
  
  return(
    <Box>
      <Toaster 
        position="top-right"
        richColors
        duration={3000}
        // expand={true} 
      />

      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/slots' element={<Companies/>} />
        <Route path='/slots/:companyId' element={<CompanyById />} />
        
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/auth'>
          <Route path='register' element={<Register />}/>
          <Route path='login' element={<Login />}/>
          <Route path='verifyotp' element={<VerifyOtp/>}/>
          <Route path="forgotpw" element={<ForgotPw />} />
          <Route path="resetpw" element={<ResetPw />} />
        </Route>
      </Routes>

      {!hideNavbar && <Footer />}
    </Box>
  )
}


function App() {
  return (
    <Router>
      <AppContext/>
    </Router>
  )
}

export default App