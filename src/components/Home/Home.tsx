import React from 'react';
import './home.scss';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

export const Home = () => {
  // const [active, setActive] = React.useState(false);
  // const handleOpenMenu = () => {
  //   setActive(!active);
  // };
  return (
    <Container className="container-home">
      {/*<DropDownMenu />*/}
      {/*<div className="home-nav__wrapper">*/}
      {/*  <nav className="home-nav" onClick={handleOpenMenu}>*/}
      {/*    <div></div>*/}
      {/*    <div></div>*/}
      {/*    <div></div>*/}
      {/*  </nav>*/}

      {/*  <ul*/}
      {/*    className={*/}
      {/*      active*/}
      {/*        ? classNames('home-nav__list', 'open')*/}
      {/*        : 'home-nav__list-invisible'*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <li>*/}
      {/*      <a href={'/'}>About</a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href={'/'}>Gallery</a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href={'/'}>Contact</a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}

      <h1 className="home-title">Valentin</h1>
    </Container>
  );
};
