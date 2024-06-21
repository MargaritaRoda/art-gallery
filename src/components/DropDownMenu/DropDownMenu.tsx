import React from 'react';
import './DropDownMenu.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { about, contact, PICTURES } from '../../services/config/routs';

export const DropDownMenu = () => {
  const [active, setActive] = React.useState(false);
  const handleOpenMenu = () => {
    setActive(!active);
  };
  return (
    <div className="home-nav__wrapper">
      <nav className="home-nav" onClick={handleOpenMenu}>
        <div></div>
        <div></div>
        <div></div>
      </nav>

      <ul
        className={
          active
            ? classNames('home-nav__list', 'open')
            : 'home-nav__list-invisible'
        }
      >
        <li>
          <a href={about}>About</a>
        </li>
        <li>
          <NavLink to={PICTURES}>Gallery</NavLink>
        </li>
        <li>
          <a href={contact}>Contact</a>
        </li>
      </ul>
    </div>
  );
};
