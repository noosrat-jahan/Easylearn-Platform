import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ClassDetails = () => {

    const {id} = useParams()
    console.log(id);

    const {  data: classDetails = {} } = useQuery({
        queryKey: [ 'classDetails'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/AllnewlyCreatedClass/${id}`)
            console.log(res.data);
            return res.data            
        }
    })
    console.log(classDetails);

    const {  data: enrolledByClass = [] } = useQuery({
        queryKey: ['enrolledByClass', id],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/enrolledByClass/${id}`)
            
            return res.data
        }
    })

    return (
        <div>
            <div className="card flex gap-5 lg:card-side bg-base-100 w-10/12 mx-auto shadow-xl my-10">
                <div className='w-full'>
                    <img
                        src={classDetails.image}
                        alt="Album"
                        className=' rounded' />
                        
                </div>
                <div className="card-body text-left space-y-3">                    
                    <h1 className='text-3xl font-bold text-amber-700'>{classDetails.title}</h1>
                    <p>{classDetails.details}</p>
                    <p className='bg-pink-50 text-orange-500 font-bold text-2xl '>৳ {classDetails.price} </p>
                    <h3 className='text-pink-600 text-xl font-bold uppercase font-openSans'>Total Enrolled: {enrolledByClass.length} </h3>
                    {/* <p>{classDetails.status}</p> */}
                    <h2 className='text-blue-700 font-semibold'>Instructor Name: {classDetails.name}</h2>
                    <h2 className='text-blue-600 font-semibold'>Instructor Email: {classDetails.email}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/payment/${classDetails._id}`} className="btn bg-purple-700 text-xl text-white">PAY NOW</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;