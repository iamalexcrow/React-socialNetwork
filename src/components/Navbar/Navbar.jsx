import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  // debugger;
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink> 
        {/* activeClassName - вручную добавляем класс который нужно будет добавить если active, добавляем эту шнягу из-за модульности  */}
      </div>
      <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
      </div>
 
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile">Settings</NavLink>
      </div>
    </nav>
  )
}


// NavLink добавляет класс Acive - скрытно 
export default Navbar; 