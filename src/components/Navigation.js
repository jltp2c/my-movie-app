import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
      <div className='NavContainer'>
          <ul className='navigation'>
          <NavLink to='/' end className={(nav)=> nav.isActive? "nav-active" : ""}>
              <li>Accueil</li>
            </NavLink>
            <NavLink to='/coupdecoeur' className={(nav)=> nav.isActive? "nav-active" : ""}>
              <li> Favoris </li>
            </NavLink>
          </ul>
      </div>
   
   
  )
}

export default Navigation;