import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ReactStars from 'react-stars';

const Feedback = () => {

    const { refetch, data: allFeedback = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/feedback')
            return res.data
        }
    })


    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
    };

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-pink-700 mb-5'>Students Reviews</h1>
            <Swiper
                pagination={true}
                mousewheel={true}
                modules={[Navigation, Pagination, Mousewheel]}
                navigation={true}
                className="mySwiper three"
            >
                {
                    allFeedback.map(feedback => <SwiperSlide key={feedback._id}>

                        <div className="w-full h-full mx-auto bg-pink-200 dark:bg-gray-700  rounded-lg shadow-lg  flex flex-col items-center justify-center text-center">
                            <div className='h-5/6 '>
                                <img
                                    src={feedback.photo}
                                    alt={feedback.name}
                                    className="lg:w-28 w-14 h-14 lg:h-28 mx-auto rounded-full object-cover mb-4 border-2 border-gray-300"
                                />
                                <h3 className="lg:text-4xl font-semibold text-gray-800 dark:text-amber-100 mb-3">{feedback.name}</h3>
                                <p className="lg:text-2xl text-pink-700 font-bold italic dark:text-teal-100">{feedback.title}</p>
                                <p className="text-gray-700 mt-4 text-sm md:text-lg leading-relaxed">{feedback.description}</p>

                                <div className='flex flex-col items-center'>
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        onChange={ratingChanged}
                                        size={24}
                                        color2={"#FF9D23"}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Feedback;