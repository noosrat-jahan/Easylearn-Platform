import React from 'react';
import { Link } from 'react-router-dom';
import error from "../assets/404.gif"

const Errorpage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen '>
            <Link to="/" className='btn btn-info text-white font-semibold text-lg'>⬅️ Back To Home</Link>
            <img src={error} alt="" className='h-screen' />
        </div>
        </div>
    );
};

export default Errorpage;