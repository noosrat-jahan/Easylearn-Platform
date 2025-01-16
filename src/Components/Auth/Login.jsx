import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import pic from '../../assets/login.png'
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const {setUser, loginUser, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()

    // const handleLogin = e => {
    //     e.preventDefault()

    //     const form = e.target 
    //     const email = form.email.value
    //     const password = form.password.value
        
    //     loginUser(email, password)
    //     .then((result) =>{
    //         const user = result.user
    //         setUser(user)
    //         console.log(user);
    //         navigate('/')
    //     })
    //     .catch(err =>{
    //         console.log('Login Error:', err.message);
    //     })
        
    // }

    // const handleGoogleLogin = () => {
    //     googleSignIn()
    //     .then((result) =>{
    //         const user = result.user
    //         setUser(user)
    //         console.log(user);
    //         navigate('/')
    //     })
    //     .catch(err =>{
    //         console.log('Register Error:', err.message);
    //     })

    // }

    return (
        <div className="hero-content  grid lg:grid-cols-2 grid-cols-1 gap-3 w-10/12 mx-auto shadow-lg m-3">

           
            <div className='flex justify-center'>
                <img src={pic} alt="" className='md:w-4/5' />
            </div>

            <div className="card  w-full lg:max-w-md shrink-0 ">
                <form onSubmit={handleLogin} className="card-body text-black p-0 md:p-4">
                    <h1 className='text-3xl text-black font-semibold'>Login</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#d269cc] text-white font-semibold">Sign In</button>
                    </div>

                    <h3 className='text-[#d269cc]'>New here? <Link to="/register" className='font-bold'> Create a New Account </Link></h3>

                    <p className='text-black text-xl'>OR </p>

                    <div className='flex text-[#444444]  w-full justify-center gap-5 mt-3 text-xl'>

                        <div className=' btn btn-outline w-full'>
                            <button onClick={handleGoogleLogin} className='flex items-center gap-3'><FcGoogle /> Sign up with Google
                            </button>
                        </div>

                    </div>
                </form>
            </div>


        </div>
    );
};

export default Login;