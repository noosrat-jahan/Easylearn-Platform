import { Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const TeacherRequests = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: teachReq = [] } = useQuery({
        queryKey: ['teachReq'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/teacherRequests')
            return res.data
        }
    })
    console.log(teachReq);



    const handleMakeTeacher = request => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Teacher!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/allusers/${request.userEmail}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {

                            axios.patch(`http://localhost:5000/teacherRequests/${request.email}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.modifiedCount > 0) {
                                        refetch()
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: `${request.name} is a Teacher now`,
                                            showConfirmButton: false,
                                            timer: 3500
                                        });
                                    }
                                })
                        }
                    })
            }
        });
    }


    const handleRejectTeacher = request => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject Teacher Request!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/teacherRequests/rej/${request.email}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Request from ${request.name} is  Rejected`,
                                showConfirmButton: false,
                                timer: 3500
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className='my-4 text-3xl text-green-800'>Review Teacher Requests</h1>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="p-3">Teacher name
                                </th>
                                <th className="p-3">Teacher image
                                </th>
                                <th className="p-3">Experience</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                teachReq.map(request => <tr key={request._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{request.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <img src={request.picture} alt="" className='w-16 h-16 mx-auto' />
                                    </td>
                                    <td className="p-3">
                                        <p>{request.experience}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{request.title}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{request.category}</p>
                                    </td>
                                    <td className="p-3 font-bold">
                                        <p className={request.status === 'accepted' ? 'text-green-600': request.status === 'rejected'? 'text-red-500': 'text-yellow-600'}>{request.status}</p>
                                    </td>
                                    <td className="p-3 text-center flex gap-2 justify-center items-center">
                                        <Button 
                                        disabled={request.status === 'accepted' || request.status === 'rejected'} 
                                        onClick={() => { handleMakeTeacher(request) }} className="px-5 py-2.5 btn font-semibold rounded-md bg-green-600 text-gray-50"
                                        >Approve</Button>
                                        <Button
                                            disabled={request.status === 'accepted' || request.status === 'rejected'}
                                            onClick={() => { handleRejectTeacher(request) }}
                                            className="px-5 py-2.5 btn font-semibold rounded-md bg-orange-600 text-gray-50"
                                        >Reject</Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherRequests;