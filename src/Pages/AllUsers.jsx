import { Button } from '@chakra-ui/react';
import React from 'react';
import {
    useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import Swal from 'sweetalert2';
import useAdmin from '../Hooks/useAdmin';

const AllUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/allusers')
            return res.data
        }
    })
    console.log(users);

    const handleMakeAdmin = users => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://edu-manage-website-server.vercel.app/allusers/admin/${users._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${users.name} is an Admin now`,
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
            <h1 className='mt-5 text-3xl text-rose-400 font-semibold'>All Users</h1>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs ">
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
                                <th > </th>
                                <th className="p-3">User name
                                </th>
                                <th className="p-3">User image
                                </th>
                                <th className="p-3">User email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                users.map((singleuser, index) => <tr key={singleuser._id} className="border-b border-opacity-20  dark:border-gray-300 dark:bg-gray-50">
                                    <td className='font-bold'>
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{singleuser.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <img src={singleuser.photo} alt="" className='w-16 h-16 mx-auto' />
                                    </td>
                                    <td className="p-3">
                                        <p>{singleuser.email}</p>

                                    </td>
                                    <td className="p-3">
                                        <p>{singleuser.role}</p>

                                    </td>
                                    <td className="p-3 text-center">
                                        <Button disabled={singleuser.role === "admin"} onClick={() => { handleMakeAdmin(singleuser) }} className="px-5 py-2.5 font-semibold btn rounded-md bg-teal-600 text-gray-50"
                                        >Make Admin</Button>
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

export default AllUsers;