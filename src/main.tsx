import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouteOne from './pages/RouteOne.tsx'
import RouteTwo from './pages/RouteTwo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: '/route-one',
    element: <RouteOne/>,
    
  },
  {
    path: '/personajes/:id',
    element: <RouteTwo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
