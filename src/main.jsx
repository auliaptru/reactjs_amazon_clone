import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';
import TodaysDeals from './pages/Navbar/TodaysDeals/TodaysDeals.jsx';
import Coupons from './pages/Navbar/TodaysDeals/Coupons/Coupons.jsx';
import RenewedDeals from './pages/Navbar/TodaysDeals/RenewedDeals/RenewedDeals.jsx';
import Outlet from './pages/Navbar/TodaysDeals/Outlet/Outlet.jsx';
import DigitalDeals from './pages/Navbar/TodaysDeals/DigitalDeals/DigitalDeals.jsx';
import Warehouse from './pages/Navbar/TodaysDeals/Warehouse/Warehouse.jsx';
import App from './App.jsx';
import Registry from './pages/Navbar/Registry/Registry.jsx';
import CustomerService from './pages/Navbar/CustomerService/CustomerService.jsx';
import DigitalServices from './pages/Navbar/CustomerService/DigitalServices.jsx';
import GiftCards from './pages/Navbar/GiftCards/GiftCards.jsx';
import './index.css';
import Sell from './pages/Navbar/Sell/Sell.jsx';

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
    {
        path: '/gift-cards',
        element: <GiftCards />,
    },
    {
        path: '/sell',
        element: <Sell />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
