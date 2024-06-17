import { gallery, Gallery } from './db';

export const getAllPictures = (): Promise<Gallery[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gallery);
    }, 300);
  });
};
export const getPictureById = async (id: number): Promise<Gallery> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pic = gallery.find((i) => i.id === id);
      if (pic) {
        resolve(pic);
      } else {
        reject(new Error('http 404'));
      }
    }, 300);
  });
};

export const getFilteredPictures = async (
  genres: string[],
): Promise<Gallery[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let filteredPictures: Gallery[] = [];
      for (let genre of genres) {
        filteredPictures.concat(gallery.filter((i) => i.genre === genre));
      }
      if (filteredPictures) {
        resolve(filteredPictures);
      } else {
        reject(new Error('http 404'));
      }
    }, 300);
  });
};

export const getAllGenres = async (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let allGenres: string[] = [];
      let genreSet: Set<string> = new Set();

      for (let pic of gallery) {
        genreSet.add(pic.genre);
      }

      allGenres = Array.from(genreSet);
      if (allGenres) {
        resolve(allGenres);
      } else {
        reject(new Error('http 404'));
      }
    }, 300);
  });
};
