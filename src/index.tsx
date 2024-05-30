import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { Container } from './components/Container/Container';
import { Sign } from './components/Signin/Sign';
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { PictureBanner } from './components/PictureBanner/PictureBanner';
import { Footer } from './components/Footer/Footer';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/*<Home />*/}

    {/*<Welcome />*/}
    <PictureBanner />
    <Footer />
    {/*<Container>*/}
    {/*<Sign />*/}
    {/*    /!*<h1>Hello Art Gallery</h1>*!/*/}
    {/*</Container>*/}
  </React.StrictMode>,
);
