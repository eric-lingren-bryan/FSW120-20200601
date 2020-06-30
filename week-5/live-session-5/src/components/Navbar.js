import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
      I'm Navbar!
      <ul className='my-link-wrapper'>
        <Link className='my-nav-links' to='/'> Home </Link>
        <Link to='about'> About </Link>
        <Link to='register'> Register </Link>
      </ul>
    </div>
  )
}

export default Navbar;
