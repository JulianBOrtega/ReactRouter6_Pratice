import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.png'

const st_wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30vw',
  height: '500px',
  margin: '50px 472px 0px 472px',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  padding: '15px',
  borderRadius: '25px',
  textAlign: 'center'
}
const st_form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
}
const st_logo = {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  gap: '5px',
  fontSize: '25px',
  marginBottom: '35px'
}
const imgSize = 75
const st_logo_img = {
    width: imgSize + 'px',
    height: imgSize + 'px'
}
const st_logo_txt = {
  fontSize: '25px'
}
const st_inputContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '35px'
}
const st_input = {
    padding: '15px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: 'rgba(65, 65, 65, 0.603)'
}

const Login = ({ setUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if(!name || !email) return;

        setUser({name: name, email: email});
        navigate('/profile');
    };

  return (
    <div style={st_wrapper}>
        <form onSubmit={handleSubmit} style={st_form}>
            <h4>Login to</h4>
            <figure style={st_logo}>
                <img src={logo} alt="logo" style={st_logo_img} />
                <p style={st_logo_txt}>AnimuPNG</p>
            </figure>
            <div style={st_inputContainer}>
                <input style={st_input} type="text" id='name' 
                value={name} onChange={e => setName(e.target.value)}
                placeholder='Your name'/>
                <input style={st_input} type="text" id='email' 
                value={email} onChange={e => setEmail(e.target.value)}
                placeholder='Your email'/>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login