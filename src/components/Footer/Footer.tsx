import React, { memo } from 'react';
import './Footer.scss';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import {
  aboutId,
  contactId,
  GitHub,
  INDEX,
  LinkedIn,
  PICTURES,
} from '../../services/config/routs';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = memo(() => {
  return (
    <Container className="footer">
      <div className="footer-item" id={contactId}>
        <p className="footer-item__title">Valentin</p>
        <p>Art Gallery</p>
      </div>
      <div className="footer-item">
        <p className="footer-item__subtitle">Contact</p>
        <p>Margarita_Roda@outlook.com</p>
      </div>
      <div className="footer-item">
        <p className="footer-item__subtitle">Links</p>
        <ul className="footer-item__links">
          <li>
            <a href={`${INDEX}#${aboutId}`}>About</a>
          </li>
          <li>
            <a href={PICTURES}>Gallery</a>
          </li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={classNames('footer-item', 'last-item')}>
        <div className="footer-item__social">
          <NavLink to={LinkedIn}>
            <svg
              height="29.934"
              width="30"
              viewBox="0 0 11.625 11.599"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.706 3.727H.372a.187.187 0 0 0-.187.188v7.497c0 .103.084.187.187.187h2.334a.187.187 0 0 0 .188-.187V3.915a.187.187 0 0 0-.188-.188zM1.54 0C.69 0 0 .69 0 1.538a1.54 1.54 0 0 0 3.079 0A1.54 1.54 0 0 0 1.54 0ZM8.642 3.54c-.937 0-1.63.404-2.05.862v-.487a.187.187 0 0 0-.188-.188H4.17a.187.187 0 0 0-.187.188v7.497c0 .103.084.187.187.187h2.329a.187.187 0 0 0 .187-.187v-3.71c0-1.25.34-1.736 1.211-1.736.95 0 1.025.78 1.025 1.8v3.646c0 .104.083.187.187.187h2.33a.187.187 0 0 0 .187-.187V7.3c0-1.86-.354-3.76-2.983-3.76Z" />
            </svg>
          </NavLink>
        </div>
        <div className="footer-item__social">
          <NavLink to={GitHub}>
            <svg
              width="30"
              height="29.547"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="scale(.3)">
                <path
                  fill="#000"
                  d="M50 0C22.375 0 0 22.373 0 49.996c0 23.497 16.123 42.997 37.877 48.495-.252-.626-.375-1.502-.375-2.374v-8.502h-6.25c-3.375 0-6.503-1.498-7.877-4.25-1.626-3-1.877-7.626-6-10.502-1.252-1-.252-2 1.123-1.877 2.625.75 4.749 2.502 6.749 5.123 2 2.626 2.876 3.251 6.625 3.251 1.75 0 4.498-.123 7-.502 1.375-3.502 3.75-6.625 6.626-8.123-16.75-2-24.75-10.25-24.75-21.5 0-4.877 2.124-9.502 5.627-13.501-1.124-3.877-2.626-11.876.502-15 7.502 0 12 4.877 13.123 6.124 3.749-1.251 7.877-2 12.123-2 4.375 0 8.375.749 12.124 2 1.123-1.251 5.625-6.123 13.123-6.123 3 3 1.626 11.122.375 14.999 3.502 3.876 5.502 8.624 5.502 13.5 0 11.251-7.877 19.502-24.498 21.25 4.625 2.375 7.877 9.123 7.877 14.123v11.386c0 .375-.124.749-.124 1.124C86 90.368 100 71.87 100 49.997 100 22.372 77.626 0 50 0Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h100v98.495H0Z" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
        </div>
      </div>
    </Container>
  );
});
