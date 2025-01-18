import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaBook, FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TeachOnPage = () => {
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {        
        data.status = 'pending'
        console.log(data)

        axios.post('http://localhost:5000/teacherRequests', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Request has been Submitted for Evaluation",
                        showConfirmButton: false,
                        timer: 3500
                    });
                    navigate('/')
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl font-bold my-5 text-pink-600 font-lato'>Become a Part of EASYLEARN</h1>
            <div className='w-3/4 mx-auto bg-gray-50 p-7 my-10'>
                <h3 className='text-left mb-3 text-blue-600'>Please fill out the form with necessary information....</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        {/* name field  */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Your FullName*</span>
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
                    </div>

                    {/* Experience  */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        {/* Experience  */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Experience*</span>
                            </div>
                            <select
                                {...register("experience", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled selected>Experience</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Mid-level">Mid-level</option>
                                <option value="Experienced">Experienced</option>

                            </select>
                        </label>

                        {/* title  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text"> Image*</span>
                            </div>
                            <input
                                {...register("picture", { required: true })}
                                type="text"
                                placeholder="image"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    <div className='flex gap-3 flex-col lg:flex-row'>
                        {/* category  */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled selected>Category</option>
                                <option value="Academic Instructor"> Academic Instructor</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Creative Arts">Creative Arts</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Python">Python</option>                          

                            </select>
                        </label>

                        {/* title  */}

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text"> Title*</span>
                            </div>
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                placeholder="add title"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* submit form button  */}
                    <button type="submit" className='flex gap-3 items-center bg-gradient-to-r from-[#447cb4] to-[#bf5aac] text-white font-semibold text-lg py-2.5 px-3 rounded'>
                        Submit for Review <FaBook></FaBook>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TeachOnPage;