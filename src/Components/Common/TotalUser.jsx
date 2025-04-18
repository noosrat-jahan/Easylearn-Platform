import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import CountUp from 'react-countup';

const TotalUser = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/allusers')
            return res.data
        }
    })

    const {  data: totalClass = [] } = useQuery({
        queryKey: ['totalClass'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/totalClass')
            // console.log(totalClass);
            return res.data
        }
    })

    const {  data: totalEnrolled = [] } = useQuery({
        queryKey: ['totalEnrolled'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/totalEnrolled')
            return res.data
        }
    })
    return (
        <div>

            <section className="p-10 my-10 text-gray-100 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gray-500 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="container grid lg:grid-cols-1 gap-6 mx-auto col-span-1">
                    
                    <div className="flex justify-center items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                       
                            <p className="text-3xl font-semibold leading-none"> <CountUp end={users.length} duration={2} redraw={true}  /></p>
                            <p className="capitalize text-blue-700 text-xl font-bold">Total Usres</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <SiGoogleclassroom />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none"><CountUp end={totalClass.length} duration={2}  /> </p>
                            <p className="capitalize  text-amber-700 text-xl font-bold">Total  Classes</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <PiStudentFill />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none"><CountUp end={totalEnrolled.length} duration={2}  /></p>
                            <p className="capitalize text-green-700 text-xl font-bold">Total enrollment</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-2'>
                    <img
                        src="https://i.ibb.co.com/9tPSdmp/two-students-studying-together-online-with-laptop-park-1150-4114.jpg"
                        alt="Inspiring Teachers"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>
        </div>
    );
};

export default TotalUser;