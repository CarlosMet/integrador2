import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import VehicleAdd from './pages/VehicleAdd.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    // errorElement: <NotFound />
  },
  {
    path: "/agregar",
    element: <VehicleAdd />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
