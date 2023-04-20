import React from 'react'
import Navbar from './Navbar';

export default function Header() {
    return (
      <header className='fixed-top'>
        {/* <ul>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              About
            </NavLink>
          </li>
            </ul> */}
            <Navbar/>
         
      </header>
    );
}
