import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Nada } from './assets/Nada.tsx'

const router = createBrowserRouter([
  {
    path: "/personajes",
    element: <App />,
  },
  {
    path: '/personaje/:id',
    element: <Nada/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
