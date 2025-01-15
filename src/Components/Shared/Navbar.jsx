import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Easy learn.png'

const Navbar = () => {

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-classes">All Classes</NavLink>
        <NavLink to="/teachon">Teach On EASYLEARN</NavLink>
    </>

    return (
        <div className="navbar bg-[#1976D2] text-white font-poppins sticky top-0 justify-between px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" className="w-1/3 lg:w-24" />
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-4 font-semibold text-lg">
                    {links}
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><h1 className="justify-between">User Name <span className="badge">New</span></h1></li>
                    <li><Link>Dashboard</Link></li>
                    <li><button>LogOut</button></li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;



