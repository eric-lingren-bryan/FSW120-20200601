import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      Hello!  I'm Navbar!

      <ul>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/register'> Register </Link>
        <Link to='/google'> Google </Link>
      </ul>

    </div>
  );
}

export default Navbar;
