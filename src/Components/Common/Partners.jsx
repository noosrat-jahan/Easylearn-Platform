import React from 'react';

import img1 from '../../assets/volkswagen2019_logo.jpg'
import img2 from '../../assets/cisco_2.png'
import img3 from '../../assets/att-logo-0.png'
import img4 from '../../assets/ericsson-logo-0.png'
import img5 from '../../assets/samsung.png'
import img6 from '../../assets/pg-logo-0.png'
import img7 from '../../assets/citigroup-logo.png'

const Partners = () => {
    return (
        <div className='mt-10 space-y-5'>
            <h1 className='text-4xl'>Recognized by Global Leaders in Technology and Busines</h1>

            <div className='w-10/12 mx-auto grid grid-cols-7 justify-evenly'>
                <div className='flex flex-col items-center'>
                    <img src={img1} alt="" className='w-20' />
                    <p class="text-gray-700 text-xs">
                        
                    </p>
                </div>
                <img src={img2} alt="" className='w-20' />
                <img src={img3} alt="" className='w-20' />
                <img src={img4} alt="" className='w-20' />
                <img src={img5} alt="" className='w-20' />
                <img src={img6} alt="" className='w-20' />
                <img src={img7} alt="" className='w-16 h-16' />
            </div>
        </div>
    );
};

export default Partners;