import { gallery, Gallery } from './db';

export const getAllPictures = (): Promise<Gallery[]> => {
  return new Promise((resolve, reject) => {
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
