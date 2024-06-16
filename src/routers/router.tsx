import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { SystemLayout } from '../components/SystemLayout/SystemLayout';
import { INDEX, PICTURE, PICTURES, SIGNUP } from '../services/config/routs';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route element={<ErrorBoundary />}>
        <Route path={INDEX} element={<></>} />
        <Route path={SIGNUP} element={<></>} />
        <Route path={PICTURES} element={<></>} />
        <Route path={PICTURE} element={<></>} />
      </Route>
    </Route>,
  ),
);
