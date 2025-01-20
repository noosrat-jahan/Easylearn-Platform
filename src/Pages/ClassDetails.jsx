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
            const res = await axios.get(`http://localhost:5000/AllnewlyCreatedClass/${id}`)
            console.log(res.data);
            return res.data            
        }
    })
    console.log(classDetails);

    return (
        <div>
            <div className="card flex gap-5 lg:card-side bg-base-100 w-10/12 mx-auto shadow-xl my-10">
                <div>
                    <img
                        src={classDetails.image}
                        alt="Album"
                        className='3/4 rounded' />
                        
                </div>
                <div className="card-body text-left space-y-3">
                    
                    <h1 className='text-3xl font-bold text-amber-700'>{classDetails.title}</h1>
                    <p>{classDetails.details}</p>
                    <p className='bg-pink-50 text-orange-500 font-bold text-2xl w-1/2'>৳ {classDetails.price} </p>
                    <h3 className='text-pink-800 text-2xl font-semibold font-openSans'>Total Enrolled: </h3>
                    {/* <p>{classDetails.status}</p> */}
                    <h2 className='text-blue-700 font-semibold'>Instructor Name: {classDetails.name}</h2>
                    <h2 className='text-blue-600 font-semibold'>Instructor Email: {classDetails.email}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/payment/${classDetails._id}`} className="btn btn-accent">Enroll</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;