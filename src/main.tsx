import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Character from "./components/Character.tsx";
import Characters from "./components/Characters.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ruta",
    element: <div>Esto es una ruta</div>,
  },
  {
    path: "/about",
    element: <h1>This is about mai frend</h1>,
  },
  {
    path: "/character",
    element: <Characters />,
  },
  {
    path: "/character/:charId",
    element: <Character />,
  },
  {
    path: "/contact",
    element: <h1>This is contact</h1>,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
