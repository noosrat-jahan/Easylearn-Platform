import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const AllClasses = () => {   

    // for pagination purpose
    const { data: allclasscount = {count : 1} } = useQuery({
        queryKey: ['allclasscount'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/allDisplayedClassCount')
            return res.data
        }
    })

    const { count } = allclasscount
    const [currentPage, setCurrentPage] = useState(0)
    const [classPerPage, setClassPerPage] = useState(10)
    const numberofPages = Math.ceil(count / classPerPage)

    const pages = [...Array(numberofPages).keys()]
    console.log(pages);
   
    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: [ currentPage, classPerPage, 'newCreatedClass'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/allDisplayedClass?page=${currentPage}&size=${classPerPage}`)
            return res.data
        }
    })   


    const handleprevpage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlenextpage = () => {
        if (currentPage < numberofPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden, move up
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

    return (
        <div>
            <section id="all-classes" className="bg-white dark:bg-[#1d232a] py-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl dark:text-white font-bold mb-5 text-pink-700">All Classes</h2>
                    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            newCreatedClass?.map(classes =>  <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
                              ><div key={classes._id} className="class-card bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-lg space-y-2 h-full">
                                <img src={classes.image} alt="Class Image" className="w-full h-32 object-cover rounded-md mb-4" />
                                <p className="text-sm font-semibold text-left text-purple-600">{classes.name}</p>
                                <h3 className="text-lg font-bold dark:text-amber-50">{classes.title}</h3>
                                <p className="text-lg font-bold text-orange-600">৳ {classes.price} per month</p>
                                <p className="text-sm text-gray-700 dark:text-amber-100 mt-2 h-max">
                                    {classes.details.slice(0, 100)}
                                </p>
                                <p className='text-pink-800 text-lg font-semibold font-openSans pb-5'>Total Enrolment: {classes.TotalEnrollment} </p>
                                <Link to={`/all-classes/${classes._id}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    Enroll Now
                                </Link>
                            </div>
                            </motion.div>
                            )
                        }

                    </div>
                </div>
            </section>


            {/* pagination control buttons  */}
            <div className='my-5'>
                
                <button className='btn btn-accent btn-square mr-2 text-white' onClick={handleprevpage}>Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => { setCurrentPage(page) }}
                        className='btn btn-accent btn-square mr-2 text-white' key={page}>{page}</button>)
                }
                <button className='btn btn-accent btn-square mr-2 text-white' onClick={handlenextpage}>Next</button>

            </div>
        </div>
    );
};

export default AllClasses;