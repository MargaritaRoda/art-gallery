import React, { useEffect } from 'react';
import './PicturePage.scss';
import { PictureContent } from '../../components/PictureContent/PictureContent';
import { useSelector } from 'react-redux';
import { selectorAllPictures } from '../../store/selectors/allPictures.selector';
import { Container } from '../../components/Container/Container';
import { useIdPictureInNumber } from '../../services/hooks/idHook';
import { Footer } from '../../components/Footer/Footer';

export const PicturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const id = useIdPictureInNumber();
  console.log('id selected picture', id);
  const allPictures = useSelector(selectorAllPictures);
  console.log(allPictures);

  const picture = allPictures.find((i) => i.id === id);
  if (!picture) {
    throw new Error('No picture with id given');
  }

  console.log('picture', picture);
  const { img, imgInterior, imgRow, title, genre, size, description } = picture;

  return (
    <>
      {/*<header className="picture-header">*/}
      {/*  <div className="picture-header-img img-left">*/}
      {/*    <img src={vanGogh} alt="Van Gogh" style={{ width: '100%' }} />*/}
      {/*  </div>*/}
      {/*  <div className="picture-header-img img-right">*/}
      {/*    <img src={gernikaPNG} alt="Gernika" />*/}
      {/*  </div>*/}
      {/*</header>*/}
      <Container className="picture-content-container">
        {picture ? (
          <PictureContent
            id={id}
            img={img}
            imgInterior={imgInterior}
            imgRow={imgRow}
            title={title}
            genre={genre}
            size={size}
            description={description}
          />
        ) : (
          <p style={{ color: 'white', fontSize: '32px' }}>Something wrong</p>
        )}
      </Container>
      <Footer />
    </>
  );
};
