import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userpic from '../assets/userpic.png'
import { useForm } from 'react-hook-form';

const StudentProfile = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className='w-7/12 mx-auto border border-neutral-500 rounded-lg my-6 p-8 flex flex-col items-center gap-3'>
                <img src={user ? user?.photoURL : userpic} alt="" className='rounded-full w-1/4' />
                <h1 className='bg-slate-200 p-3 rounded-md text-green-800 font-semibold'>Role: Student</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4'>

                    {/* name field  */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Your FullName</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="your name"
                            className="input input-bordered w-full " />
                    </label>

                    {/* email field  */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Your Email</span>
                        </div>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="your email"
                            className="input input-bordered w-full " />
                    </label>

                    {/* image  */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text"> Image</span>
                        </div>
                        <input
                            {...register("picture", { required: true })}
                            type="text"
                            placeholder="image"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text"> Phone</span>
                        </div>
                        <input
                            {...register("phone", { required: true })}
                            type="text"
                            placeholder="phone number"
                            className="input input-bordered w-full " />
                    </label>




                    {/* submit form button  */}
                    <button type="submit" className='w-full  bg-gradient-to-r from-[#9eb444] to-[#dd7c58] text-white font-semibold text-lg py-2.5 px-3 rounded'>
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StudentProfile;