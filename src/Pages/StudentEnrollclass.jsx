import React, { useContext } from 'react';
import picture from '../assets/bannerimg1.jpeg'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const StudentEnrollclass = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email);

    const { refetch, data: myEnrollClass = [] } = useQuery({
        queryKey: [user?.email, 'myEnrollClass'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/payments?email=${user.email}`)
            console.log(res.data);
            return res.data
        }
    })
    console.log(myEnrollClass);
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <h1 className='text-left text-3xl font-poppins underline  font-semibold text-green-700'>My Classes</h1>
            <div className=' grid grid-cols-2 gap-5 mt-10'>

                {
                    myEnrollClass.map(myenrollclass => <div key={myenrollclass._id} className="w-full flex items-center mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
                        {/* Image Section */}
                        <img
                            className="w-1/2 h-full object-cover"
                            src={myenrollclass.classThumbnail}
                            alt='class img'
                        />
                        {/* Details Section */}
                        <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-gray-800">{myenrollclass.classTitle}</h2>
                            <p className="text-gray-600">Posted by: {myenrollclass.teacherName}</p>
                            <Link to={`/studentdashboard/studentclasses/${myenrollclass.classID}`}
                                // onClick={onContinue}
                                className="flex items-center justify-center gap-3 mt-4 px-4 py-2 bg-neutral text-white text-sm font-medium rounded hover:bg-gray-600"
                            >
                                Continue <FaArrowRight></FaArrowRight>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default StudentEnrollclass;