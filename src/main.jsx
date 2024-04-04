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
import AccountDetails from './pages/AccountDetails/AccountDetails';
import ParticularCategory from './pages/ParticularCategory/ParticularCategory';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n/i18n.js'
import Contact from './pages/Contact/Contact.jsx';
import Faq from './pages/Faq/Faq.jsx';


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
        path: "/update_profile",
        element: <Update_Profile />
      },
      {
        path: "/profile/:id", // Dynamic route with parameter
        element: <UserProfile />
      },
      {
        path: "/inbox",
        element: <Inbox />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/my_account",
        element: <AccountDetails />
      },
      {
        path:"/category/:categoryName",
        element: <ParticularCategory/>
      },
      {
        path: '/contactUs',
        element: <Contact />
      },
      {
        path: '/faq',
        element: <Faq />
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