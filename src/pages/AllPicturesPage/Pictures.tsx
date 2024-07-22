import React, { useEffect, useState } from 'react';
import './Pictures.scss';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import bannerImgPNG from '../../asset/bannerImg.png';
import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PictureList } from '../../components/PictureList/PictureList';
import { getAllGenres, getAllPictures } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { Genres, setGenres } from '../../store/slicers/genres.slicer';
import { selectGenre } from '../../store/selectors/genre.selector';
import { setFilteredGenres } from '../../store/slicers/filteredGenres.slicer';
import { setAllPictures } from '../../store/slicers/allPictures.slicer';

export const Pictures = () => {
  const dispatch = useDispatch();
  const selectedAllGenres = useSelector(selectGenre);
  const [allGenres, setAllGenres] = useState<Genres>(
    selectedAllGenres ? selectedAllGenres : [],
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresList = await getAllGenres();
        console.log('genresList', genresList);
        setAllGenres(genresList);
        dispatch(setGenres(genresList));
        dispatch(setFilteredGenres(genresList));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };
    fetchGenres().then();
  }, []);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const picturesList = await getAllPictures();
        dispatch(setAllPictures(picturesList));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };
    fetchPictures().then();
  }, []);

  return (
    <Container>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: bannerImgPNG, speed: -30 }]}
          className="main-picture-banner"
        />
      </ParallaxProvider>
      <Sidebar />
      <PictureList isLoading={false} />
      <Footer />
    </Container>
  );
};
