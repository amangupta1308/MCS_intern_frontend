import React from 'react'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_heading">TASK MANAGER</div>
        <a className='nav_link' href='/'>Home</a>
        <a className='nav_link' href='/tasks'>Tasks</a>
    </div>
  )
}

export default Navbar