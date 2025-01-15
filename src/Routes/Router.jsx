import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage';
import AllClasses from '../Pages/AllClasses';
import ClassDetails from '../Pages/ClassDetails';
import Errorpage from '../Pages/Errorpage';
import TeachOnPage from '../Pages/TeachOnPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/all-classes",
                element: <AllClasses></AllClasses>
            },
            {
                path: "/all-classes/:id",
                element: <ClassDetails></ClassDetails>
            },
            {
                path: "/teachon",
                element: <TeachOnPage></TeachOnPage>
            },
        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
]);

export default Router;