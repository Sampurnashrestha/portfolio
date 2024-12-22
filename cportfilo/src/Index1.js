import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Applayout from './pro/Applayout';
import Error from './pro/Error';
import Home from './pro/Home';
import About from './pro/About';
import Project from './pro/Project';
import Contact from './pro/Contact';
import { RouterProvider } from 'react-router-dom';

function Index1() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    errorElement: <Error />,
    children: [
      {
        path :"/home",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/project",
        element:<Project/>,
      },
      {
        path:"/contact",
        element:<Contact />
      },

    ],
  },
 ]);
 return <RouterProvider router={router} />;
}

export default Index1;
