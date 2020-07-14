import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <ul>
        <Link to='/'> Home </Link>
        <Link to='/tweets'> Tweets </Link> 
        <Link to='/login'> Login </Link>
        <button> Logout </button>
      </ul>
    </div>
  );
}

export default Navbar
