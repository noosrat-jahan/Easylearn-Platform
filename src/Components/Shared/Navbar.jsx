import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Easy learn.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import useTeacher from "../../Hooks/useTeacher";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-classes">All Classes</NavLink>
      {user && <NavLink to="/teachon">Teach On EASYLEARN</NavLink>}     
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      
    </>
  );

  const handleLogout = () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign Out Successfully",
        showConfirmButton: false,
        timer: 3500,
      });
      navigate("/login");
    });
  };


  // implemtation of dark theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )
  const handleToggle = e =>{
    if(e.target.checked){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme")
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  return (
    <div className="navbar  bg-gradient-to-r from-sky-600 to-pink-500  z-10 font-poppins sticky top-0 justify-between px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black space-y-3 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={logo} alt="" className="w-1/3 lg:w-24" />
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal items-center px-1 space-x-10 font-semibold font-poppins text-yellow-200 text-lg">
          {links}

          {/* Toggle button here */}
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input type="checkbox" 
              onChange={handleToggle}
              checked={theme === "light" ? false : true} />
              {/* light theme sun image */}
              <span className=" swap-on text-amber-300 text-lg">
                <MdSunny />
              </span>
              {/* dark theme moon image */}
              <span className=" swap-off text-white text-lg">
                <IoMdMoon />
              </span>
            </label>
          </button>
        </ul>
      </div>

      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>

          {/* dashboard route setup  */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 space-y-3 w-56 p-2 shadow"
          >
            <li>
              <h1 className="justify-between text-pink-600">
                {user?.displayName}{" "}
                <span className="badge">
                  {isAdmin ? "Admin" : isTeacher ? "Teacher" : "Student"}
                </span>
              </h1>
            </li>
            {/* <li><Link to="/studentdashboard/studentclasses">Dashboard</Link></li> */}
            {isAdmin ? (
              <li>
                <Link to="/studentdashboard/teacherRequest">Dashboard</Link>
              </li>
            ) : (
              <>
                {isTeacher ? (
                  <li>
                    <Link to="/studentdashboard/teacherclasses">Dashboard</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/studentdashboard/studentclasses">Dashboard</Link>
                  </li>
                )}
              </>
            )}
            <li>
              <Link onClick={handleLogout} to="/login">
                <button>LogOut</button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="bg-pink-50 font-semibold px-3 py-1.5 rounded text-blue-700"
        >
          Sign In
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
