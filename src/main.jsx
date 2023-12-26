import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';
import TodaysDeals from './pages/TodaysDeals/TodaysDeals.jsx';
import App from './App.jsx';
import './index.css';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
