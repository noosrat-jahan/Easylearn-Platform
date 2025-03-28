import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { Unsubscribe } from '@mui/icons-material';
import axios from 'axios';

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (updatedprofileInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedprofileInfo)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        updateUser,
        googleSignIn,
        logOutUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser:', currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser?.email}
                axios.post('https://edu-manage-website-server.vercel.app/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        console.log('token',res.data.token);
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // ToDo: remove token(if token stored in the client side)
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return ()=>{
            return unSubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;