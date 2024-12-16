import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import VehicleAdd from '../pages/VehicleAdd.jsx';
import Login from '../pages/Login.jsx';
import UserPage from '../pages/UserPage.jsx';
import Registros from '../pages/Registros.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/agregar',
    element: <VehicleAdd />,
  },
  {
    path: '/register',
    element: <Registros />,
  },
]);

export default router;