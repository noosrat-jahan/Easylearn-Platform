import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pic from '../../assets/login.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {

    const { createUser, googleSignIn, setUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user);

                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photo,
                    role: 'student'
                }

                axios.post('https://edu-manage-website-server.vercel.app/allusers', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Signed Up Successfully",
                                showConfirmButton: false,
                                timer: 3500
                            });
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch(err => {
                console.log('Register Error:', err.message);
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user);

                const userInfo = {
                    // registeredId: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    role: 'student'
                }
                axios.post('https://edu-manage-website-server.vercel.app/allusers', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Signed Up Successfully",
                                showConfirmButton: false,
                                timer: 3500
                            });
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch(err => {
                console.log('Register Error:', err.message);
            })

    }

    return (
        <div className="hero-content  grid lg:grid-cols-2 grid-cols-1 gap-3 w-10/12 mx-auto shadow-lg m-3">

            <div className="card  w-full lg:max-w-md shrink-0 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black p-0 md:p-4">
                    <h1 className='text-3xl text-black font-semibold'>Sign Up</h1>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered " />
                        {errors.name && <span className='text-left text-red-700'>Name is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered " />
                        {errors.email && <span className='text-left text-red-700'>Email is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Your Image" className="input input-bordered " />
                        {errors.photo && <span className='text-left text-red-700'>Image is required</span>}
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"}
                            {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
                                })}
                            name='password' placeholder="Enter your password" className="input input-bordered" />

                        <span onClick={() => { setShowPassword(!showPassword) }} className='absolute right-4 top-[52px]'>
                            {
                                showPassword ? <IoMdEye /> : <IoMdEyeOff />
                            }
                        </span>

                        {errors.password?.type === "required" && <span className='text-left text-red-700'>Password is required</span>}
                        {errors.password?.type === "minLength" && <span className='text-left text-red-700'>Password must contain at least 6 characters.</span>}
                        {errors.password?.type === "maxLength" && <span className='text-left text-red-700'>Password must be within 20 characters .</span>}
                        {errors.password?.type === "pattern" && <span className='text-left text-red-700'>Password must contain at least one uppercase letter, one lowecase letter, one digit and one special character.</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#d269cc] text-white font-semibold">Sign Up</button>
                    </div>

                    <h3 className='text-[#d269cc]'>Already registered? <Link to="/login" className='font-bold'>Go to log in</Link></h3>

                    <p className='text-black text-xl font-semibold'>OR </p>

                    <div className='flex text-[#444444]  w-full justify-center gap-5 mt-3 text-xl'>

                        <div className=' btn btn-outline w-full'>
                            <button onClick={handleGoogleLogin} className='flex items-center gap-3 '><FcGoogle /> Sign up with Google
                            </button>
                        </div>

                    </div>
                </form>
            </div>

            <div className='flex justify-center'>
                <img src={pic} alt="" />
            </div>
        </div>
    );
};

export default Register;