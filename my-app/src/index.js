import React from 'react';
import ReactDOM from 'react-dom/client';
import Projects from './views/Projects.jsx';

import App from './App';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404</p>,
    children:[{
      path: "home",
      element: <Home />,
    },
    {
      path: "projects",
      element: <Projects />,
    }]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

