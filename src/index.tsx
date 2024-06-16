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
import { PictureList } from './components/PictureList/PictureList';
import { PictureContent } from './components/PictureContent/PictureContent';
import { ImgFullScreen } from './components/ImgFullScreen/ImgFullScreen';
import { router } from './routers/router';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <PictureContent
      id={gallery[0].id}
      img={gallery[0].img}
      imgInterior={gallery[0].imgInterior}
      imgRow={gallery[0].imgRow}
      title={gallery[0].title}
      genre={gallery[0].genre}
      size={gallery[0].size}
      description={gallery[0].description}
    />

    {/*<PictureList items={gallery} isLoading={false} />*/}
    {/*<PictureItem*/}
    {/*  genre={gallery[0].genre}*/}
    {/*  img={gallery[0].img}*/}
    {/*  size={gallery[0].size}*/}
    {/*  title={gallery[0].title}*/}
    {/*  id={gallery[0].id}*/}
    {/*/>*/}

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
