import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaBook, FaBookOpen, FaHandPaper } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        data.status = 'pending'
        console.log(data)

        axios.post('https://edu-manage-website-server.vercel.app/newlyCreatedClass', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New Class Created successfully",
                        showConfirmButton: false,
                        timer: 3500
                    });
                    navigate('/studentdashboard/teacherclasses')
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-bold my-5 text-pink-600 font-lato'>Add New Class</h1>
            <div className='w-4/5 mx-auto bg-gray-50 p-5 my-10'>
                <h3 className='text-left mb-3 text-blue-600'>Please fill out the form with necessary information....</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        {/* name field  */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Your Name</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="your name"
                                defaultValue={user?.displayName}
                                readOnly
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
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* title and price  */}
                    <div className='flex flex-col lg:flex-row gap-3'>

                        {/* title  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text"> Title*</span>
                            </div>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                placeholder="title"
                                className="input input-bordered w-full " />
                        </label>

                        {/* Price  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text"> Price*</span>
                            </div>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="price"
                                className="input input-bordered w-full " />
                        </label>
                    </div>


                    {/* image  */}

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text"> Image*</span>
                        </div>
                        <input
                            {...register("image", { required: true })}
                            type="text"
                            placeholder="add image"
                            className="input input-bordered w-full " />
                    </label>


                    {/* description  */}

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description*</span>
                        </div>
                        <textarea
                            {...register("details")}
                            className="textarea textarea-bordered h-24"
                            placeholder="description">
                        </textarea>

                    </label>

                    {/* submit form button  */}
                    <button type="submit" className='w-full justify-center flex gap-3 items-center bg-gradient-to-r from-[#2c8366] to-[#6e8ab3] text-white font-semibold text-lg py-2.5 px-3 rounded'>
                        Add Class <FaBookOpen></FaBookOpen>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;