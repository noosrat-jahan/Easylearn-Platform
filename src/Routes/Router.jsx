import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            }
        ]
    },
]);

export default Router;