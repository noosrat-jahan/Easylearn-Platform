import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const AllClasses = () => {

    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: ['teachReq'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/allDisplayedClass')
            return res.data
        }
    })

    return (
        <div>
            <section id="all-classes" class="bg-white py-5">
                <div class="container mx-auto px-4">
                    <h2 class="text-2xl font-semibold mb-8">All Classes</h2>
                    <div class="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            newCreatedClass?.map(classes =>  <div key={classes._id} class="class-card bg-gray-100 p-4 rounded-lg shadow-lg space-y-2">
                                <img src={classes.image} alt="Class Image" class="w-full h-40 object-cover rounded-md mb-4" />
                                <p class="text-sm font-semibold text-left text-purple-600">{classes.name}</p>
                                <h3 class="text-lg font-bold">{classes.title}</h3>                                
                                <p class="text-lg font-bold text-orange-600">৳ {classes.price} per month</p>
                                <p class="text-sm text-gray-700 mt-2">
                                    {classes.details}
                                </p>
                                <p className='text-pink-800 text-lg font-semibold font-openSans pb-5'>Total Enrolment: </p>
                                <Link to={`/all-classes/${classes._id}`} class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    Enroll Now
                                </Link>
                            </div>
                            )
                        }

                    </div>
                </div>
            </section>

        </div>
    );
};

export default AllClasses;