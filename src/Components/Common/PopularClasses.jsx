import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-pink-700 mb-5'>popular classes</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper border-2 border-green-600"
            >
                <SwiperSlide  className=' border border-red-600'>
                    <div  class="w-full h-full bg-gray-100 p-4 rounded-lg shadow-lg space-y-2">
                        <img src={''} alt="Class Image" class="w-full h-40 object-cover rounded-md mb-4" />
                        <p class="text-sm font-semibold text-left text-purple-600"></p>
                        <h3 class="text-lg font-bold"></h3>
                        <p class="text-lg font-bold text-orange-600">৳  per month</p>
                        <p class="text-sm text-gray-700 mt-2">
                            
                        </p>
                        <p className='text-pink-800 text-lg font-semibold font-openSans pb-5'>Total Enrolment: </p>
                        <Link to={`/all-classes/${1}`} class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Enroll Now
                        </Link>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='border border-red-600'>Slide 2</SwiperSlide> */}
               
            </Swiper>
        </div>
    );
};

export default PopularClasses;