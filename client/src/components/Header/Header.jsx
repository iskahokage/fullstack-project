import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='contacts'>
        <ul>
          <li>194 Chuy ave.</li>
          <li>(500) 500-774</li>
          <li>iskndrsmt@gmail.com</li>
        </ul>
        <NavLink to="/login">Sign In</NavLink>
      </div>
      <hr />
      <div className='navbar'>
        <p className='firmTitle'>garant</p>
        <div className='navlinks'>
          <li><NavLink to='/'>home</NavLink></li>
          <li><NavLink to="/lawyers">lawyers</NavLink></li>
          <li><a href="#consultation">free consultation</a></li>
        </div>
      </div>
    </div>
  );
};

export default Header;