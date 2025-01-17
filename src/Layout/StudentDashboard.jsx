import React from 'react';
import { FaBook, FaUser } from 'react-icons/fa';
import { SiGoogleclassroom } from "react-icons/si";
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/Easy learn.png'

const StudentDashboard = () => {
    return (
        <div className='flex'>
            <div className='bg-[#67c9d6] min-h-screen w-3/12 '>
                <Link to="/"><img src={logo} alt="" className="w-1/3 lg:w-28 mt-3 mx-auto" /></Link>
                <ul className="menu text-lg space-y-5 pt-10">
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/myprofile"><FaUser></FaUser> My Profile </NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/studentclasses"><FaBook></FaBook> My Enroll Class</NavLink></li>


                    <div className="divider"></div>
                    {/* for teacher  */}
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/addclasses"><SiGoogleclassroom /> Add Class</NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/teacherclasses"><FaBook></FaBook> My Class</NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/myProfile"><FaUser></FaUser> My Profile</NavLink></li>


                    <div className="divider"></div>
                    {/* for admin  */}
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/teacherRequest"><SiGoogleclassroom /> Teacher Request
                    </NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/allusers"><SiGoogleclassroom /> Users</NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/allClasses"><FaBook></FaBook> All classes
                    </NavLink></li>
                    <li className='w-3/4 mx-auto border border-black rounded-lg shadow'><NavLink to="/studentdashboard/myProfile"><FaUser></FaUser> Profile</NavLink></li>
                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentDashboard;