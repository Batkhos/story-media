import React from 'react'
import CurrentData from '../Data/CurrentData'
import CommentData from '../Data/CommetData'
import { Link } from 'react-router-dom'

export default function Comments() {
  return (
    <div>
        <div className='flex gap-2' >
            <img className='ml-4 h-10 w-10 rounded-full' src={CurrentData.map(x=>(x.ProfieImage))} alt="" />
            <input type="text" placeholder='Write a Comment' className='message-search  h-10 w-full  font-semibold ' />
            <button type='submit'className='btn btn-primary mr-2 h-10'>Send</button>
        </div>
        <div className=''>
            {CommentData.map(x=>(
                <Link to='/profile/id' key={x.id}>
                <div className='flex gap-2'>
                    <img className='ml-4 h-10 w-10 rounded-full' src={x.commentProfile} alt="" />
                    <div>
                        <h5>{x.name}</h5>
                        <p>{x.CommeText}</p>
                        <small>1h ago</small>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
