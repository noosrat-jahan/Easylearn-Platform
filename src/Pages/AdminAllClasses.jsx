import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminAllClasses = () => {

    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: ['teachReq'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/AllnewlyCreatedClass')
            return res.data
        }
    })
    // console.log(newCreatedClass);

    const handleApproveClass = newclass => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.patch(`https://edu-manage-website-server.vercel.app/AllnewlyCreatedClass/${newclass._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Class Request Approved`,
                                showConfirmButton: false,
                                timer: 3500
                            });
                        }
                    })
                    .catch(err =>{
                        console.log('Approve Error:', err.message);
                    })
            }
        })
    }

    const handleRejectClass = newclass => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject Class Request!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://edu-manage-website-server.vercel.app/AllnewlyCreatedClass/rej/${newclass._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Class Request Rejected`,
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
        <h1 className='mt-5 text-xl font-roboto font-semibold uppercase'>See All New Class Request</h1>


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
                            <th className="p-3">Class Title
                            </th>
                            <th className="p-3">Class Image
                            </th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            newCreatedClass.map(newClass => <tr key={newClass._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>{newClass.title}</p>
                                </td>
                                <td className="p-3">
                                    <img src={newClass.image} alt="" className='w-16 h-10 mx-auto' />
                                </td>
                                <td className="p-3">
                                    <p>{newClass.email}</p>
                                </td>
                                <td className="p-3">
                                    <p>{newClass.details}</p>
                                </td>
                                <td className="p-3 font-bold">
                                    <p className={newClass.status === 'accepted' ? 'text-green-600' : newClass.status === 'rejected' ? 'text-red-500' : 'text-yellow-600'}>{newClass.status}</p>
                                </td>
                                <td className="p-3 text-center flex gap-2 justify-center items-center">
                                    <Button
                                        disabled={newClass.status === 'accepted' || newClass.status === 'rejected'} onClick={() => { handleApproveClass(newClass) }} className="px-5 py-2.5 btn font-semibold rounded-md bg-green-600 text-gray-50"
                                    >Approve</Button>
                                    <Button
                                        disabled={newClass.status === 'accepted' || newClass.status === 'rejected'}
                                        onClick={() => { handleRejectClass(newClass) }}
                                        className="px-5 py-2.5 btn font-semibold rounded-md bg-orange-600 text-gray-50"
                                    >Reject</Button>

                                    <Link disabled={newClass.status === 'pending' || newClass.status === 'rejected'} 
                                    to={`/studentdashboard/teacherclasses/${1}`} variant='solid' className='bg-[#441752] text-sm font-semibold text-white btn px-2 py-1 rounded-md' w={'full'} margin={'auto'}>
                                        See Progress
                                    </Link>
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

export default AdminAllClasses;