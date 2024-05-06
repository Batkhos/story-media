import React from 'react'
import Message from '../components/Message'
import FriendsReq from '../components/FriendsReq'
import './RightBar.css'
export default function Rightbar() {
  return (
    <div className='rightBar max-md:hidden'>
      <div className='rightbar-container'>
        <Message/>
        <FriendsReq/>
      </div>
    </div>
  )
}
