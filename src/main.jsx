import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';
import TodaysDeals from './pages/Subnav/TodaysDeals/TodaysDeals.jsx';
import Coupons from './pages/Subnav/TodaysDeals/Coupons/Coupons.jsx';
import RenewedDeals from './pages/Subnav/TodaysDeals/RenewedDeals/RenewedDeals.jsx';
import Outlet from './pages/Subnav/TodaysDeals/Outlet/Outlet.jsx';
import DigitalDeals from './pages/Subnav/TodaysDeals/DigitalDeals/DigitalDeals.jsx';
import Warehouse from './pages/Subnav/TodaysDeals/Warehouse/Warehouse.jsx';
import App from './App.jsx';
import './index.css';
import Registry from './pages/Registry/Registry.jsx';
import CustomerService from './pages/CustomerService/CustomerService.jsx';
import DigitalServices from './pages/CustomerService/DigitalServices.jsx';

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
    {
        path: '/warehouse',
        element: <Warehouse />,
    },
    {
        path: '/registry',
        element: <Registry />,
    },
    {
        path: '/customer',
        element: <CustomerService />,
    },
    {
        path: '/customer/digital-services',
        element: <DigitalServices />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
