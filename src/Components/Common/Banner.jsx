import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles.css';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import banner1 from '../../assets/bannerimg1.jpeg'
import banner2 from '../../assets/bannerimg2.jpeg'
import banner3 from '../../assets/bannerimg3.jpeg'

const Banner = () => {


    return (
        <div>

            <Swiper
                cssMode={true}
                // navigation={true}
                autoplay={{
                    delay: 5000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: false, // Autoplay will not stop after user interaction
                }}
                loop={true} // Enable looping
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper one"
            >

                <SwiperSlide>

                    <div className="text-green-800 flex lg:ml-20 ml-7 items-center  w-full h-full bg-one">
                        <div className='w-3/4 text-left space-y-4'>
                            <h1 className="lg:text-7xl md:text-4xl text-xl font-bold">Learning Made Easy</h1>
                            <p className="lg:text-xl text-sm md:w-1/2">
                                Discover engaging classes and take the next step in your education journey with interactive tools and resources.
                            </p>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow">
                                Find a Class
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                   
                    <div className="text-amber-800 flex lg:ml-20 ml-7 items-center   w-full h-full bg-two">
                        <div className='w-3/4 text-left space-y-4'>
                            <h1 className="lg:text-7xl md:text-4xl text-xl font-bold">Create. Teach. Inspire.</h1>
                            <p className="lg:text-xl text-sm md:w-1/2">
                            Become a part of our platform to educate the next generation. Share your knowledge with ease and grow your impact.
                            </p>
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 lg:py-4 px-4 lg:px-8 rounded shadow">
                            Join Us as a Teacher
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    
                    <div className="text-purple-800 flex lg:ml-20 ml-7 items-center   w-full h-full bg-three">
                        <div className='w-3/4 text-left space-y-4'>
                            <h1 className="lg:text-7xl md:text-4xl text-xl font-bold">Your Success, Our Priority</h1>
                            <p className="lg:text-xl text-sm md:w-1/2 ">
                            Streamline your education management with tools built for you. Empower students and educators for a brighter future.
                            </p>
                            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded shadow">
                            Explore Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Banner;