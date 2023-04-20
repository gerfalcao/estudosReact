import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Head from './Head'

const Login = () => {
    const navigate = useNavigate()

    function handleClick() {
    console.log('Fazer login')
    navigate('/sobre')
    }
  
  return (<div>
    <Head title="Login" />
    <h1>Login</h1>
    <button onClick={handleClick}>Login</button>
  
    </div>)
}

export default Login