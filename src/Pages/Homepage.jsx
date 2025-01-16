import React from 'react';
import Banner from '../Components/Common/Banner';
import Partners from '../Components/Common/Partners';
import PopularClasses from '../Components/Common/PopularClasses';
import Feedback from '../Components/Common/Feedback';
import TotalUser from '../Components/Common/TotalUser';
import InspireTeach from '../Components/Common/InspireTeach';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-10/12 mx-auto '>
                <Partners></Partners>
                <PopularClasses></PopularClasses>
                <Feedback></Feedback>
                <TotalUser></TotalUser>
                <InspireTeach></InspireTeach>
            </div>
        </div>
    );
};

export default Homepage;