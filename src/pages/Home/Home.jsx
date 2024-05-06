import React from 'react'
import AddPost from '../../components/AddPost'
import Feeds from '../../components/Feeds'
import Stories from '../Stories/Stories'

 function Home() {
  return (
    <div className='mt-12 max-md:relative max-md:left-10 max-md:w-screen'>
      <Stories/>
      <AddPost/>
      <Feeds/>
    </div>
  )
}
export default Home;