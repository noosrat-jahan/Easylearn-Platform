import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import banner1 from '../../assets/bannerimg1.jpeg'
import banner2 from '../../assets/bannerimg2.jpeg'
import banner3 from '../../assets/bannerimg3.jpeg'

const Banner = () => {

    
    return (
        <div>

            <Swiper
                cssMode={true}
                // navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                
                <SwiperSlide><img src={banner2} alt="" className='mix-blend-overlay' /></SwiperSlide>
                
                <SwiperSlide><img src={banner1} alt=""  className='mix-blend-overlay'/></SwiperSlide>
                <SwiperSlide><img src={banner3} alt=""  className='mix-blend-overlay'/></SwiperSlide>
                
            </Swiper>


        </div>
    );
};

export default Banner;