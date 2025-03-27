import React from 'react';

import img1 from '../../assets/volkswagen2019_logo.jpg'
import img2 from '../../assets/cisco_2.png'
import img3 from '../../assets/att-logo-0.png'
import img4 from '../../assets/ericsson-logo-0.png'
import img5 from '../../assets/samsung.png'
import img6 from '../../assets/pg-logo-0.png'
import img7 from '../../assets/citigroup-logo.png'
import img8 from '../../assets/udemy.png'

const Partners = () => {
    return (
        <div className='mt-10 space-y-5 '>
            <h1 className='lg:text-4xl text-2xl mb-10 font-roboto font-semibold text-pink-600 '>Recognized by Global Leaders in Technology and Business</h1>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-5 justify-evenly '>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md  animate-float' style={{ animationDelay: "0s" }}>
                    <img src={img1} alt="" className='w-16  mb-2' />
                    <p className="text-gray-700 dark:text-white text-xs">
                        Inspiring innovation in learning for the automotive industry.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "0.5s" }}>
                    <img src={img2} alt="" className='w-20  mb-2' />
                    <p className="text-gray-700 dark:text-white  text-xs ">
                        Driving digital transformation in education.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "1s" }}>
                    <img src={img3} alt="" className='w-20  mb-2' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Enhancing online learning with superior connectivity.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "1.5s" }}>
                    <img src={img4} alt="" className='w-20  mb-2 dark:bg-white' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Ensuring global accessibility through communication tech.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "2s" }}>
                    <img src={img5} alt="" className='w-20  mb-2' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Supporting community-focused educational outreach.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "2.5s" }}>
                    <img src={img6} alt="" className='w-20  mb-2' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Powering scalable, data-driven learning tools.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "3s" }}>
                    <img src={img7} alt="" className='w-20  mb-6' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Extending mobile learning to remote areas.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center px-3 py-2 bg-amber-50 shadow-md animate-float' style={{ animationDelay: "3.5s" }}>
                    <img src={img8} alt="" className='w-20 bg-white' />
                    <p className="text-gray-700 dark:text-white  text-xs">
                        Providing diverse courses to empower skill development globally.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Partners;