import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useAdmin = () => {

    const {user} = useContext(AuthContext)

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/allusers/admin/${user?.email}`)
            console.log(res.data);
            return res.data.isAdmin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;



