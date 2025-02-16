import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Map from './pages/Map.jsx'
import Donate from './pages/Donate.jsx'
import Voulenteer from './pages/Voulenteer.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>
  },
  {
    path: '/landing',
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
    path: '/voulenteer',
    element: <Voulenteer/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
