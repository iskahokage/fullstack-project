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
      </div>
      <hr />
      <div className='navbar'>
        <p className='firmTitle'>garant</p>
        <div className='navlinks'>
          <li><NavLink to='#'>home</NavLink></li>
          <li><NavLink to="#">about us</NavLink></li>
          <li><NavLink to="#">services</NavLink></li>
          <li><NavLink to="#">free consultation</NavLink></li>
        </div>
      </div>
    </div>
  );
};

export default Header;