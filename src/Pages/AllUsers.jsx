import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    useQuery,
} from '@tanstack/react-query'
import axios from 'axios';
import Swal from 'sweetalert2';
import useAdmin from '../Hooks/useAdmin';
import { FaSearch } from "react-icons/fa";

const AllUsers = () => {

    // for pagination purpose
    const { data: allusersCount = { count: 1 } } = useQuery({
        queryKey: ['allusersCount'],
        queryFn: async () => {
            const res = await axios.get('https://edu-manage-website-server.vercel.app/allusersCount')
            return res.data
        }
    })

    const { count } = allusersCount
    const [currentPage, setCurrentPage] = useState(0)
    const [usersPerPage, setusersPerPage] = useState(10)
    const numberofPages = Math.ceil(count / usersPerPage)

    const pages = [...Array(numberofPages).keys()]
    console.log(pages);

    const { refetch, data: users = [] } = useQuery({
        queryKey: [currentPage, usersPerPage, 'user'],
        queryFn: async () => {
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/allusers?page=${currentPage}&size=${usersPerPage}`)
            return res.data
        }
    })

    const handleprevpage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlenextpage = () => {
        if (currentPage < numberofPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

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

    const [searchResult, setSearchResult] = useState([])

    const handleSearchUser = (e) => {
        e.preventDefault()
        const query = e.target.email.value
        console.log(query);
        axios.get(`https://edu-manage-website-server.vercel.app/searchUser/${query}`)
            .then(res => {
                console.log(res.data);
                setSearchResult(res.data)
            })
    }

    return (
        <div>
            <h1 className='mt-5 text-3xl text-rose-400 font-semibold'>All Users</h1>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

                <form onSubmit={handleSearchUser}>
                    <label className="input input-bordered flex items-center gap-2 my-3 w-1/3">
                        <input type="text" className="grow" name='email' placeholder="Search By User Email" />
                        <button type="submit" className='bg-purple-200 p-2'><FaSearch /></button>
                    </label>
                </form>

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
                                searchResult.length > 0 ? searchResult.map((singleuser, index) => <tr key={singleuser._id} className="border-b border-opacity-20  dark:border-gray-300 dark:bg-gray-50">
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
                                    :
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

            {/* pagination control buttons  */}
            <div className='my-5'>

                <button className='btn btn-accent btn-square mr-2 text-white' onClick={handleprevpage}>Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => { setCurrentPage(page) }}
                        className='btn btn-accent btn-square mr-2 text-white' key={page}>{page}</button>)
                }
                <button className='btn btn-accent btn-square mr-2 text-white' onClick={handlenextpage}>Next</button>

            </div>
        </div>
    );
};

export default AllUsers;