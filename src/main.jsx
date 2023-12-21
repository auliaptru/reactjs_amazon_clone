import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import './index.css';
import SignIn from './pages/SignIn/SignIn.jsx';
import Cart from './pages/Cart/Cart.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
