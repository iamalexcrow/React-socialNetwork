import React from 'react';
import c from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={c.header}>
        <img scr="#"></img>

        <div className ={c.loginBlock}>
          {props.isAuth 
          ? <div> {props.login} - <button onClick={props.logout}>Log Out</button> </div>
          :<NavLink to={'/login'}>Login</NavLink>}
          
        </div>
      </header>
}

export default Header;