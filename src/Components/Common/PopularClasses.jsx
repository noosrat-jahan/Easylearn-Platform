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
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularClasses = () => {

    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: ['newCreatedClass'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/popularClasses')
            return res.data
        }
    })

    // const sortedByEnrollment = newCreatedClass.sort((a, b) => b.TotalEnrollment - a.TotalEnrollment)

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-pink-700 mb-5'>Popular Classes</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper two "
                style={{
                    
                    backgroundColor: "#8EC5FC",
                    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
                  }}
            >

                {
                    newCreatedClass.map(newClass => <SwiperSlide  >
                        <div  class="w-full h-[95%] bg-gray-100 p-3  rounded-lg shadow-lg space-y-2 ">
                            <img src={newClass.image} alt="Class Image" class="w-full h-40 object-cover rounded-md mb-4" />
                            <p class="text-sm font-semibold text-left text-purple-600">{newClass.name}</p>
                            <h3 class="text-lg font-bold">{newClass.title}</h3>
                            <p class="text-lg font-bold text-orange-600">৳ {newClass.price} per month</p>
                            <p class="text-sm text-gray-700 mt-2">
                                {newClass.details.slice(0, 80)}
                            </p>
                            <p className='text-pink-800 text-lg font-semibold font-openSans pb-3'>Total Enrolment: {newClass.TotalEnrollment}</p>
                            <Link to={`/all-classes/${newClass._id}`} class="mt-4 text-base bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Enroll Now
                            </Link>
                        </div>
                    </SwiperSlide>)
                }
                
                {/* <SwiperSlide className='border border-red-600'>Slide 2</SwiperSlide> */}
               
            </Swiper>
        </div>
    );
};

export default PopularClasses;