import { Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const TeacherRequests = () => {

    const { data: teachReq = [] } = useQuery({
        queryKey: ['teachReq'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/teacherRequests')
            return res.data
        }
    })
    console.log(teachReq);

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
                                    <td className="p-3">
                                        <p>{request.status}</p>
                                    </td>
                                    <                                            td className="p-3 text-center flex gap-2 justify-center">
                                        <Button className="px-5 py-2.5 font-semibold rounded-md bg-green-600 text-gray-50"
                                        >Approve</Button>
                                        <Button className="px-5 py-2.5 font-semibold rounded-md bg-orange-600 text-gray-50"
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