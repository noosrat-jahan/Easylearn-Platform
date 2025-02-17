import React from 'react';
import Banner from '../Components/Common/Banner';
import Partners from '../Components/Common/Partners';
import PopularClasses from '../Components/Common/PopularClasses';
import Feedback from '../Components/Common/Feedback';
import TotalUser from '../Components/Common/TotalUser';
import InspireTeach from '../Components/Common/InspireTeach';
import UseOurApp from '../Components/Common/UseOurApp';
import Faq from '../Components/Common/Faq';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto '>
                <Partners></Partners>
                <PopularClasses></PopularClasses>
                <Feedback></Feedback>
                <TotalUser></TotalUser>
                <InspireTeach></InspireTeach>
                <UseOurApp></UseOurApp>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Homepage;