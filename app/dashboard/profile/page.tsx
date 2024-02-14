'use client'
import React from 'react'
import useProfile from './useProfile'
import { PersonalData } from '@/app/components';
const Profile = () => {
    const {} = useProfile();
  return (
    <div><PersonalData/></div>
  )
}

export default Profile