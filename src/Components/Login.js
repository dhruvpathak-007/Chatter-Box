import React from 'react';
import logo from "../Images/canva1.png";
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate =useNavigate();

  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} alt='logo' className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='login-text'>Login to your account</p>
            <TextField id="standard-basic" label="Enter Name" variant="outlined"/>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
            <Button variant="outlined" onClick={()=>{
      navigate("app/welcome")
    }}>Sign in</Button>
        </div>
    </div>
  )
}

export default Login;
