import { Button } from '@chakra-ui/react';
import React from 'react';

const AllUsers = () => {
    return (
        <div>
            <h1>All Users</h1>

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
                                <th className="p-3">User name
                                </th>
                                <th className="p-3">User image
                                </th>
                                <th className="p-3">User email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-center">
                                    <Button className="px-5 py-2.5 font-semibold rounded-md bg-teal-600 text-gray-50"
                                    >Make Admin</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;