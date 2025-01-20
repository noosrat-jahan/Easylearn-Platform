import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';

const TotalUser = () => {
    return (
        <div>

            <section className="p-10 my-10 text-gray-100 bg-gradient-to-r from-blue-300 via-purple-200 to-purple-300  bg-[#8EC5FC] grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="container grid grid-cols-1 gap-6 mx-auto col-span-1">
                    
                    <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">0</p>
                            <p className="capitalize text-blue-700 text-xl font-bold">Total Usres</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <SiGoogleclassroom />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">0</p>
                            <p className="capitalize  text-amber-700 text-xl font-bold">Total  Classes</p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-teal-600 text-white text-3xl">
                            <PiStudentFill />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">0</p>
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