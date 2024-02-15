'use client'
import React, { Dispatch, SetStateAction } from 'react'
import useBuyProperty from './useBuyProperty'
import { XCircle } from 'lucide-react'

interface BuyPropertyProps {
  setShowBuyProperty: Dispatch<SetStateAction<boolean>>;
}


const BuyProperty = ({setShowBuyProperty}:BuyPropertyProps) => {
    const {} = useBuyProperty()
  return (
    <div className=" inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-50 animate__animated animate__fadeIn animate__faster flex justify-center items-center  fixed h-screen w-screen top-0 bottom-0 right-0 left-0">
        <div>
        <XCircle
              onClick={() => setShowBuyProperty(false)}
              className=" cursor-pointer hover:text-destructive hover:shadow-md hover:shadow-primary  rounded-full ease-in-out duration-150"
            />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos culpa voluptas aliquam soluta? Obcaecati quia minima possimus, quidem alias voluptatum laudantium aliquid quisquam. Nemo incidunt commodi omnis tenetur sed.
          </div> 
    </div>
  )
}

export default BuyProperty