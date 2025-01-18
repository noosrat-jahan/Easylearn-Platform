import { Button } from '@chakra-ui/react';
import React from 'react';
import {
    useQuery,
} from '@tanstack/react-query'
import axios from 'axios';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allusers')
            return res.data
        }
    })
    console.log(users);

    return (
        <div>
            <h1>All Users</h1>

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
                                        <Button className="px-5 py-2.5 font-semibold rounded-md bg-teal-600 text-gray-50"
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