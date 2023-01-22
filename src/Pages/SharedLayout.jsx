import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';

const SharedLayout = ({user}) => {
    return (
      <div>
        <Navbar user={user}/>
  
        <div>
          <Outlet/> 
          {/* Outlet loads the nested elements, 
          while keeping the contents of this file 
          present in all of them*/}
        </div>
      </div>
    )
  }
export default SharedLayout