import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Map from './pages/Map.jsx'
import Donate from './pages/Donate.jsx'
import Volunteer from './pages/Volunteer.jsx'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/map',
    element: <Map/>
  },
  {
    path: '/donate',
    element: <Donate/>
  },
  {
    path: '/volunteer',
    element: <Volunteer/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)