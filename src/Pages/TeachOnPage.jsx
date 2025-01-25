import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBook, FaUtensils } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const TeachOnPage = () => {
    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    console.log(user.email);

    const [formVisibility, setFormVisibility] = useState(true)
    const [message, setMessage] = useState('')
    const [reqbtn, setReqbtn] = useState(false)



    const mutation = useMutation({
        mutationFn: async (formData) => {
            console.log(formData);
            await axios.post('https://edu-manage-website-server.vercel.app/teacherRequests', formData)
                
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
                        setFormVisibility(false)
                        setMessage("Your Response have been recored. Your Application is Under Admin Review")
                        
                    }
                })
        }
    })

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        data.status = 'pending'
        data.userEmail = user.email
        console.log(data)

        mutation.mutate(data)
       
    }




    const { refetch, data: teacherReq = [] } = useQuery({
        queryKey: [user?.email, 'teacherReq'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/teacherRequests/${user.email}`)
            console.log(res.data);

            if (teacherReq.status === "accepted") {
                setFormVisibility(false)
                setMessage("Congratulations! You Become a Teacher On EASYLEARN")
            }
            else if (teacherReq.status === "pending") {
                setFormVisibility(false)
                setMessage("Your Response have been recored. Your Application is Under Admin Review")
            }
            else if (teacherReq.status === "rejected") {
                setFormVisibility(false)
                setMessage("Sorry!! Unfortunately Your Teacher Request Has Been Rejected")
                setReqbtn(true)
            }

            return res.data

        }
    })
    console.log(teacherReq);
    const handleResubmit = () => {
        axios.patch(`https://edu-manage-website-server.vercel.app/teacherRequests/pending/${user.email}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {                    
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Another Request Has Been Sent`,
                        showConfirmButton: false,
                        timer: 3500
                    });
                    setReqbtn(false)
                }
            })
    }


    return (
        <div>
            <h1 className='text-3xl font-bold my-5 text-pink-600 font-lato'>Become a Part of EASYLEARN</h1>
            {
                formVisibility ? <div className='w-3/4 mx-auto bg-gray-50 p-7 my-10'>
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
                                    value={user?.email}
                                    readOnly
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
                                    placeholder="your photo"
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

                </div> : <h1 className='text-3xl text-sky-400'>{message}</h1>
            }

            {
                reqbtn && <button
                    type="submit"
                    onClick={handleResubmit}
                    className=' mx-auto mt-5 flex gap-3 items-center bg-gradient-to-r from-[#46b444] to-[#5aa9bf] text-white font-semibold text-lg py-2.5 px-3 rounded'>
                    Request To Another <FaBook></FaBook>
                </button>
            }

        </div>
    );
};

export default TeachOnPage;