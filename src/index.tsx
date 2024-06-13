import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { Container } from './components/Container/Container';
import { Sign } from './components/Signin/Sign';
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { PictureBanner } from './components/PictureBanner/PictureBanner';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { checkboxFields } from './services/config/checkboxFields';
import { PictureItem } from './components/PictureItem/PictureItem';
import SunflowerPNG from '../../asset/sunflower.png';
import { gallery } from './services/db';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PictureItem
      genre={gallery[0].genre}
      img={gallery[0].img}
      size={gallery[0].size}
      title={gallery[0].title}
      id={gallery[0].id}
    />

    {/*<Sidebar checkboxFields={checkboxFields} />*/}
    {/*<Home />*/}

    {/*<Welcome />*/}
    {/*<PictureBanner />*/}
    {/*<Footer />*/}
    {/*<Container>*/}
    {/*<Sign />*/}
    {/*    /!*<h1>Hello Art Gallery</h1>*!/*/}
    {/*</Container>*/}
  </React.StrictMode>,
);
