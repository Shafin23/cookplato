import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SinglePage from './pages/SinglePage/SinglePage';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Update_Profile from './pages/Update_Profile/Update_Profile';
import UserProfile from './pages/UserProfile/UserProfile';
import Inbox from './pages/Inbox/Inbox';
import Dashboard from './pages/Dashboard/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <SinglePage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path:"/update_profile",
        element:<Update_Profile/>
      },
      {
        path: "/profile/:id", // Dynamic route with parameter
        element: <UserProfile />
      },
      {
        path:"/inbox",
        element:<Inbox/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);