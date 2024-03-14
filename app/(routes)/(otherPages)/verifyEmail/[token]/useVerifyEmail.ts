
'use client'
import {useParams, useRouter } from 'next/navigation'
import { AuthServices } from '@/app/api';
import { useEffect, useState } from 'react';
import { toggleAuth, updateShowResendLink } from '@/app/Store/Features/authSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

function useVerifyEmail(){
    const dispatch = useDispatch()
    const token = useParams().token;
    const router = useRouter()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [runOnce, setRunOnce] = useState(0)

    const verifyEmail = async()=>{
 
        setLoading(true)
        await AuthServices().verifyEmail(token as string).then(response=>{
            
            setLoading(false) 
            toast.success(response.data.message)
            dispatch(updateShowResendLink(false))
            dispatch(toggleAuth(true))
            router.push('/')

        }, error=>{
       
            toast.error(error.response.data.error?error.response.data.error : error.response.data.message)
            setError(error.response.data.error?error.response.data.error : error.response.data.message)
            
            dispatch(updateShowResendLink(true))
            dispatch(toggleAuth(true))
            router.push('/')
            setLoading(false)
        })
    }


  
    useEffect(()=>{
       verifyEmail()
    },[])
    return { error, loading, verifyEmail}
}

export default useVerifyEmail