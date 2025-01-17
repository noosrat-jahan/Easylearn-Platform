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
import TeachersAddedClass from '../Pages/TeachersAddedClass';
import TeacherClassDetails from '../Pages/TeacherClassDetails';
import TeacherRequests from '../Pages/TeacherRequests';
import AllUsers from '../Pages/AllUsers';
import AdminAllClasses from '../Pages/AdminAllClasses';

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
                element: <TeacherRequests></TeacherRequests>
            },
            {
                path: "/studentdashboard/allusers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/studentdashboard/allClasses",
                element: <AdminAllClasses></AdminAllClasses>
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