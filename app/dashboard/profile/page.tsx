'use client'
import React from 'react'
import useProfile from './useProfile'
import { CustomTab, PersonalData } from '@/app/components';
const Profile = () => {
    const {tabPayload} = useProfile();
  return (
    <div>
      {/* <CustomTab tabItems={tabPayload}/> */}
      <PersonalData/>
    </div>
  )
}

export default Profile