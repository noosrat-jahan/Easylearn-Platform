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
            <h1 className='lg:text-4xl text-2xl mb-10 font-roboto font-semibold text-pink-600'>Recognized by Global Leaders in Technology and Busines</h1>

            <div className='w-10/12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-10 justify-evenly'>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img1} alt="" className='w-16  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Inspiring innovation in learning for the automotive industry.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img2} alt="" className='w-20  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Driving digital transformation in education.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img3} alt="" className='w-20  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Enhancing online learning with superior connectivity.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img4} alt="" className='w-20  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Ensuring global accessibility through communication tech.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img5} alt="" className='w-20  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Supporting community-focused educational outreach.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={img6} alt="" className='w-20  mb-2' />
                    <p class="text-gray-700 text-xs">
                        Powering scalable, data-driven learning tools.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center '>
                    <img src={img7} alt="" className='w-20  mb-6' />
                    <p class="text-gray-700 text-xs">
                        Extending mobile learning to remote areas.
                    </p>
                </div>
                <div className='flex flex-col justify-center  items-center '>
                    <img src={img8} alt="" className='w-20 ' />
                    <p class="text-gray-700 text-xs">
                        Providing diverse courses to empower skill development globally.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Partners;