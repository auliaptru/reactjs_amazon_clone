import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';
import TodaysDeals from './pages/Subnav/TodaysDeals/TodaysDeals.jsx';
import Coupons from './pages/Subnav/Coupons/Coupons.jsx';
import RenewedDeals from './pages/Subnav/RenewedDeals/RenewedDeals.jsx';
import App from './App.jsx';
import './index.css';
import Outlet from './pages/Subnav/Outlet/Outlet.jsx';
import DigitalDeals from './pages/Subnav/DigitalDeals/DigitalDeals.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <SignUp />,
    },
    {
        path: '/login',
        element: <SignIn />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/gp',
        element: <TodaysDeals />,
    },
    {
        path: '/coupons',
        element: <Coupons />,
    },
    {
        path: '/renewed-deals',
        element: <RenewedDeals />,
    },
    {
        path: '/outlet',
        element: <Outlet />,
    },
    {
        path: '/digital-deals',
        element: <DigitalDeals />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
