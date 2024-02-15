'use client'
import React from 'react'
import useProfile from './useProfile'
import { CustomTab, PersonalData } from '@/app/components';
const Profile = () => {
    const {} = useProfile();
  return (
    <div>
      <CustomTab/>
      <PersonalData/>
    </div>
  )
}

export default Profile