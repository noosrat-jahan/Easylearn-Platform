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
import Dashboard from '../Layout/Dashboard';
import MyProfile from '../Pages/MyProfile';
import StudentEnrollclass from '../Pages/StudentEnrollclass';
import MyEnrollClassDetails from '../Pages/MyEnrollClassDetails';
import AddClass from '../Pages/AddClass';
import TeachersAddedClass from '../Pages/TeachersAddedClass';
import TeacherClassDetails from '../Pages/TeacherClassDetails';
import TeacherRequests from '../Pages/TeacherRequests';
import AllUsers from '../Pages/AllUsers';
import AdminAllClasses from '../Pages/AdminAllClasses';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

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
                element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
            },
            {
                path: "/payment/:id",
                element: <StudentPayment></StudentPayment>
            },
            {
                path: "/teachon",
                element: <PrivateRoute><TeachOnPage></TeachOnPage></PrivateRoute>
            },
        ]
    },
    {
        path: "/studentdashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/studentdashboard/myprofile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/studentdashboard/studentclasses",
                element: <StudentEnrollclass></StudentEnrollclass>
            },
            {
                path: "/studentdashboard/studentclasses/:id",
                element: <MyEnrollClassDetails></MyEnrollClassDetails>
            },
            {
                path: "/studentdashboard/addclasses",
                element: <AddClass></AddClass>
            },
            {
                path: "/studentdashboard/teacherclasses",
                element: <TeachersAddedClass></TeachersAddedClass>
            },
            {
                path: "/studentdashboard/teacherclasses/:id",
                element: <TeacherClassDetails></TeacherClassDetails>
            },
            {
                path: "/studentdashboard/teacherRequest",
                element: <AdminRoute><TeacherRequests></TeacherRequests></AdminRoute>
            },
            {
                path: "/studentdashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/studentdashboard/allClasses",
                element: <AdminRoute><AdminAllClasses></AdminAllClasses></AdminRoute>
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