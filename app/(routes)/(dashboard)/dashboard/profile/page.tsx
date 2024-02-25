'use client'
import React from 'react'
import useProfile from './useProfile'
import { CustomTab, NextOfKin, PersonalData } from '@/app/components';
const Profile = () => {
    const {tabPayload, currentTab, setCurrentTab} = useProfile();
  return (
    <div>
      <CustomTab tabItems={tabPayload} currentTab={currentTab} setCurrentTab={setCurrentTab} />
     {currentTab ==='profile' && <PersonalData />}
     {currentTab === 'next_of_kin' && <NextOfKin/>}
    </div>
  )
}

export default Profile