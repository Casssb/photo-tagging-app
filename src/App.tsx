import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './layouts/RootLayout';
import NoMatch from './pages/NoMatch';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/home/Home'));
const Game = lazy(() => import('./pages/game/Game'));
const Info = lazy(() => import('./pages/info/Info'));
const Scoreboard = lazy(() => import('./pages/scoreboard/Scoreboard'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="game/:id" element={<Game />} />
      <Route path="info" element={<Info />} />
      <Route path="scoreboard/:id" element={<Scoreboard />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}

export default App;
