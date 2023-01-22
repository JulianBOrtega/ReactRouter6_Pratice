import React from 'react'
import logo from '../assets/logo.png'

const st_wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.603)',
  width: '96.25vw',
  padding: '45px',
  margin: '25px',
  borderRadius: '15px',
}

const imgSize = 100;
const st_logo_img = {
  width: imgSize + 'px',
  height: imgSize + 'px'
}

const NotFound = () => {
  return (
    <div style={st_wrapper}>
      <img src={logo} alt="logo" style={st_logo_img} />
      <h4>Error 404 - Page not found</h4>
      <p>How did you even got here?</p>
      <p>Anyways, use the navbar to go somewhere else</p>
    </div>
  )
}

export default NotFound