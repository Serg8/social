import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
      <nav className={s.nav}>
        <ul>
          <li><NavLink className={`${s.item} ${s.active2}`} activeClassName={s.active} to="/profile">Profile</NavLink></li>
          <li><NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
          <li><NavLink className={s.item} activeClassName={s.active} to="/news">News</NavLink></li>
          <li><NavLink className={s.item} activeClassName={s.active} to="/music">Music</NavLink></li>
          <li><NavLink className={s.item} activeClassName={s.active} to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
  );
}

export default Navbar;