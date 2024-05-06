import React from 'react'
import UserProfile from '../../components/UserProfile'
import AddPost from '../../components/AddPost'
import Feeds from '../../components/Feeds'

export default function Profile() {
  return (
    <>
      <UserProfile/>
      <AddPost/>
      <Feeds/>
    </>
  )
}
