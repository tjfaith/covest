'use client'
import { AuthServices } from "@/app/api";
import { CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


function useSocialLogin(){
    const router = useRouter()
const GOOGLE_LOGIN_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_CLIENT_ID;
console.log(GOOGLE_LOGIN_CLIENT_ID, 'ID')
const [showLoading, setShowLoading] = useState(false)

const googleSignUpSuccess = (credentialResponse: CredentialResponse) => {
    setShowLoading(true);

    const googleIdToken = credentialResponse.credential as string;
    AuthServices().googleAuth(googleIdToken).then(
        (response) => {
            setShowLoading(false);
            console.log(response)
            if (response.status == 200) {
                // const user_info = { ...response.data.user_info, id: response.data.id };
                // LocalStorageServices.setLocalAccessToken(response.data.AccessToken);
                // LocalStorageServices.setLocalRefreshToken(response.data.refreshToken);
                // LocalStorageServices.setUserInfo(user_info);
                // setState({
                //     ...state,
                //     updateUser: !state.updateUser,
                // });

                router.push('/dashboard');

                toast.success(response.data.message);
            }
        },
        (error) => {
            console.log(error)
            // if (error.response.data.error) {
            //     toast.error(error.response.data.error, {
            //         progressClassName: 'bg-red-500 h-1',
            //         autoClose: 3000,
            //     });
            // }
            // setShowLoading(false);
            // if (error.code == 'ERR_NETWORK') {
            //     toast.error(error.message, {
            //         progressClassName: 'bg-red-500 h-1',
            //         autoClose: 3000,
            //     });
            // } else if (error.response.status == 401) {
            //     if (error.response.data.message === 'Please verify your email') {
            //         toast.error('Account not verified, try to login using email and password', {
            //             progressClassName: 'bg-red-500 h-1',
            //             autoClose: 3000,
            //         });
            //     }
            //     toast.error(error.response.data.error, {
            //         progressClassName: 'bg-red-500 h-1',
            //         autoClose: 3000,
            //     });
            // }
        }
    );
};

const googleSignUpFailure = () => {
    // toast.error('An error occured', {
    //     progressClassName: 'bg-red-500 h-1',
    //     autoClose: 3000,
    // });
};

    return {GOOGLE_LOGIN_CLIENT_ID, googleSignUpFailure, googleSignUpSuccess}
}

export default useSocialLogin;