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
import StudentPayment from '../Pages/StudentPayment';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import StudentDashboard from '../Layout/StudentDashboard';
import StudentProfile from '../Pages/StudentProfile';
import StudentEnrollclass from '../Pages/StudentEnrollclass';
import MyEnrollClassDetails from '../Pages/MyEnrollClassDetails';
import AddClass from '../Pages/AddClass';

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
                path: "/payment/:id",
                element: <StudentPayment></StudentPayment>
            },
            {
                path: "/teachon",
                element: <TeachOnPage></TeachOnPage>
            },
        ]
    },
    {
        path: "/studentdashboard",
        element: <StudentDashboard></StudentDashboard>,
        children: [
            {
                path: "/studentdashboard/myprofile",
                element: <StudentProfile></StudentProfile>
            },
            {
                path: "/studentdashboard/myclasses",
                element: <StudentEnrollclass></StudentEnrollclass>
            },
            {
                path: "/studentdashboard/myclasses/:id",
                element: <MyEnrollClassDetails></MyEnrollClassDetails>
            },
            {
                path: "/studentdashboard/addclasses",
                element: <AddClass></AddClass>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
]);

export default Router;