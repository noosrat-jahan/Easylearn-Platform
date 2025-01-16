import React from 'react';
import { FaBook, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/Easy learn.png'

const StudentDashboard = () => {
    return (
        <div className='flex'>
            <div className='bg-[#67c9d6] min-h-screen w-3/12 '>
                <Link to="/"><img src={logo} alt="" className="w-1/3 lg:w-28 mt-3 mx-auto" /></Link>
                <ul className="menu text-lg space-y-5 pt-10">
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/myprofile"><FaUser></FaUser> My Profile </NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/myclasses"><FaBook></FaBook> My Enroll Courses</NavLink></li>
                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentDashboard;