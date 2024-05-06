import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Feed from '../Data/Homefeed'
// import Feed from './Feed'
import Comments from './Comments'

export default function Feeds() {
  let[openC,setOpenc] = useState(false)
  const commentpush = ()=>{
  setOpenc(!openC)
  }
  return (
    <div className=''>
        {
            Feed.map((y)=>(
                <div className='feed  w-full justify-around relative right-12  mt-6 rounded-xl overflow-hidden '>
              <div className='ml-8 '> 
              <Link to='/Profile/id' key={y.id}>
                  <div className='h-12 flex items-center'>
                      <img className=' rounded-full w-12 h-12  object-cover border-none' src={y.feedProfile} alt="" />
                      <div className='mt-4 ml-2'>
                      <h5 className='item-center'>{y.name}</h5>
                      <small className=' relative bottom-2 '>1 Minutes Ago</small>
                      </div>
                  </div>   
              </Link>
              </div>
              <div className='mt-3 ml-12 items-center'>
                <p>{y.desc}</p>
                <img className='w-96 mt-3 ml-32' src={y.feedImage} alt="" />
              </div>
              <div className=' ml-3 mr-3 flex gap-32 mt-8 h-12 mb-3 '>
              <div className='border-gray-400 border w-1/3 rounded-2xl hover:text-red-600 '>
                  <span className='ml-8 mt-12 relative top-2.5'><FontAwesomeIcon icon={faHeart}/> 12 Likes</span>
                </div>
                <div className='border-gray-400 border w-1/3 rounded-2xl' onClick={commentpush}>
                  <span className='ml-3 mt-12 relative top-2.5'><FontAwesomeIcon icon={faComment}/> 5 Comments</span>
                </div>
                <div className='border-gray-400 border w-1/3 rounded-2xl'>
                  <span className='ml-8 mt-12 relative top-2.5'><FontAwesomeIcon icon={faShare}/> 2 Shares</span>
                </div>
              </div>
              {openC && <Comments/>}
          </div>
            ))
        }
        </div>
  )
}
