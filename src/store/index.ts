import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './slicers/user.slicer';
import genres from './slicers/genres.slicer';
import allPictures from './slicers/allPictures.slicer';
import { Gallery } from '../services/db';
import idPicture from './slicers/idPicture.slicer';

export interface RootState {
  genres: string[];
  allPictures: Gallery[];
  idPicture: number;
  user: {
    name: string;
    password: string;
  };
}

const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [idPicture.name]: idPicture.reducer,
  [genres.name]: genres.reducer,
  [allPictures.name]: allPictures.reducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   // blacklist: [apiSlice.reducerPath],
// };

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) => {
  //   const middlewares = getDefaultMiddleware({
  //     serializableCheck: {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       ignoreActions: ['persist/PERSIST'],
  //     },
  //   });
  //   // middlewares.push(apiSlice.middleware);
  //   return middlewares;
  // },
});

//export const persistor = persistStore(store);
