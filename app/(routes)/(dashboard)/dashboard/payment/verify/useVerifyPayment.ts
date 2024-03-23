'use client'

import { RootState } from "@/app/Store";
import { PaymentServices } from "@/app/api";
import { useSearchParams , useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function useVerifyPayment(){
    const searchParams = useSearchParams()
    const router = useRouter()
    const reference = searchParams.get('reference')
  
    const { propertyPaymentDetails } = useSelector(
        (state: RootState) => state.property
      ); 

    const [verificationStatus, setVerificationStatus] = useState('');
    const [success, setSuccess] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      const verifyPayment = async () => {
        setLoading(true)
        const payload={
            paymentRef:reference as string,
            amount:propertyPaymentDetails.totalAmountPayable
        }
        await PaymentServices().verifyPayment(payload).then(response=>{
            setSuccess(response.data.data)
        setLoading(false)

        }, error=>{
            console.log(error)
            setVerificationStatus(error.response.data.error?error.response.data.error : error.response.data.message)
            toast.error(error.response.data.error?error.response.data.error : error.response.data.message)
            router.push('/dashboard')
            setLoading(false)
        })
      
      };
  
      verifyPayment();
    }, [reference]);

    return {verificationStatus, success, loading, router}
}

export default useVerifyPayment;