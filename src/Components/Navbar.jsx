import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../assets/logo.png'

const st_wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '5px',
    width: '100vw',
    padding: '5px 35px 5px 15px',
    backgroundColor: 'black',
    position: 'fixed',
    top: 0
}
const st_logo = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '25px'
}
const imgSize = 50
const st_logo_img = {
    width: imgSize + 'px',
    height: imgSize + 'px'
}
const st_links = {
    display: 'flex',
    alignItems: 'center',
    gap: '25px'
}

const Navbar = ({user}) => {
  return (
    <nav style={st_wrapper}>
            <Link to='/' style={st_logo}>
                <img style={st_logo_img} src={logo} alt="logo" />
                <p>AnimuPNG</p>
            </Link>

            <ul style={st_links}>
                <li><NavLink to="/images">Images</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {
                    !user ? 
                        <li><NavLink to="/login">Login</NavLink></li>
                        : (<li><NavLink to="/profile">Profile</NavLink></li>)
                }
            </ul>
    </nav>
  )
}

export default Navbar