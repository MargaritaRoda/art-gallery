import React, { memo } from 'react';
import './DropDownMenu.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {
  aboutId,
  contactId,
  INDEX,
  PICTURES,
} from '../../services/config/routs';

export const DropDownMenu = memo(() => {
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
          <a href={`${INDEX}#${aboutId}`}>About</a>
        </li>
        <li>
          <NavLink to={PICTURES}>Gallery</NavLink>
        </li>
        <li>
          <a href={`${INDEX}#${contactId}`}>Contact</a>
        </li>
      </ul>
    </div>
  );
});
