import React from 'react';
import picture from '../assets/bannerimg1.jpeg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const StudentEnrollclass = () => {
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <h1 className='text-left text-3xl font-poppins underline  font-semibold text-green-700'>My Classes</h1>
            <div className=' grid grid-cols-2 gap-5 mt-10'>
                <div className="w-full flex items-center mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
                    {/* Image Section */}
                    <img
                        className="w-1/2 h-full object-cover"
                        src={picture}
                        alt='class img'
                    />
                    {/* Details Section */}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800">title</h2>
                        <p className="text-gray-600">Posted by: </p>
                        <Link to={`/studentdashboard/studentclasses/${1}`}
                            // onClick={onContinue}
                            className="flex items-center gap-3 mt-4 px-4 py-2 bg-neutral text-white text-sm font-medium rounded hover:bg-gray-600"
                        >
                            Continue <FaArrowRight></FaArrowRight>
                        </Link>
                    </div>
                </div>

                
            </div>            
        </div>
    );
};

export default StudentEnrollclass;