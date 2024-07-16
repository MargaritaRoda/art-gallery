import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { SystemLayout } from '../components/SystemLayout/SystemLayout';
import { INDEX, PICTURE, PICTURES, SIGNUP } from '../services/config/routs';
import { Signup } from '../pages/Signup/Signup';
import { Index } from '../pages/Index/Index';
import { Pictures } from '../pages/AllPicturesPage/Pictures';
import { PicturePage } from '../pages/PicturePage/PicturePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<SystemLayout />}>
      {/*<Route element={<ErrorBoundary />}>*/}
      <Route path={INDEX} element={<Index />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={PICTURES} element={<Pictures />} />
      <Route path={PICTURE} element={<PicturePage />} />
      {/*</Route>*/}
    </Route>,
  ),
);
