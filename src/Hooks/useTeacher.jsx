import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useTeacher = () => {
    const {user} = useContext(AuthContext)
    console.log(user);

    const {data: isTeacher, isPending: isTeacherLoading} = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        queryFn: async()=>{
            const res = await axios.get(`https://edu-manage-website-server.vercel.app/allusers/${user?.email}`)
            console.log(res.data);
            return res.data.isTeacher
        }
    })
    return [isTeacher, isTeacherLoading]
};

export default useTeacher;