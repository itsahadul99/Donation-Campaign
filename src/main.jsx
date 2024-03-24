import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import DonationDetails from './components/DonationDetails';
import Donation from './pages/Donation';
import { Toaster } from 'react-hot-toast';
import Statistics from './pages/Statistics';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('fakeData.json')
      },
      {
        path: '/donation',
        loader: () => fetch('fakeData.json'),
        element: <Donation />,
      },
      {
        path: '/donation-details/:id',
        element: <DonationDetails />,
        loader: () => fetch('fakeData.json')
      },
      {
        path: '/statistics',
        element:<Statistics />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </React.StrictMode>,
)
