import React from 'react'
import { useNavigate } from 'react-router-dom';

const st_wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  width: '96.25vw',
  padding: '25px',
  margin: '25px',
  borderRadius: '15px',
}

const Profile = ({ user, setUser }) => {

  function handleLogout()
  {
    setUser(null);
    useNavigate('/');
  }

  return (
    <div style={st_wrapper}>
        <h1>Welcome, { user?.name }!</h1>
        <p>Good to see you again.</p>
        <p>Apparently, your email is {user?.email}</p>
        <p>you know... In case you forgot.</p>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile