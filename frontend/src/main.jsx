// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Landing from './pages/Landing.jsx'
// import Map from './pages/Map.jsx'
// import Donate from './pages/Donate.jsx'
// import Stats from './pages/Stats.jsx'
// // import Species from './pages/Species.jsx'
// import Volunteer from './pages/Volunteer.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Landing/>
//   },
//   {
//     path: '/map',
//     element: <Map/>
//   },
//   {
//     path: '/donate',
//     element: <Donate/>
//   },
//   {
//     path: '/volunteer',
//     element: <Volunteer/>
//   },
//   {
//     path: '/stats',
//     element: <Stats/>
//   },
//   // {
//   //   path: '/species',
//   //   element: <Species/>
//   // }
// ])


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//     {/* <App /> */}
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Map from './pages/Map.jsx'
import Donate from './pages/Donate.jsx'
import Stats from './pages/Stats.jsx'
import Species from './pages/Species.jsx'
import Volunteer from './pages/Volunteer.jsx'

const router = createBrowserRouter([
  {
    path : '/',
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
  },
  {
    path: '/stats',
    element: <Stats/>
  },
  {
    path: '/species',
    element: <Species/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
