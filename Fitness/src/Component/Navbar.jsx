import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/Navbar.css'
import UnstyledInputIntroduction from '../assets/Input';
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src="https://marketplace.canva.com/EAFzZ-ml0FE/1/0/1600w/canva-black-white-and-yellow-bold-fitness-logo-JAfFy-Hl4_w.jpg" alt="logo" />
    <UnstyledInputIntroduction/>
        <div style={{"display":"flex"}}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <span>Shivam</span>
        </div>
    </div>
  )
}

export default Navbar