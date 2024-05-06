import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faFeed, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import CurrentUser from '../Data/CurrentData'

export default function UserProfile() {
  return (
    <div className=''>
        <div className='h-44 overflow-hidden relative right-12'>
            <img src={CurrentUser.map(x=>(x.CoverPhoto))} alt="" />
        </div>
        <div className='feed h-44 w-4/5 flex items-center flex-col gap-2 p-5 rounded-3xl text-center relative bottom-12 right-12 m-auto '>
            <img className='profile  w-32 rounded-full relative bottom-32' src={CurrentUser.map(x=>(x.ProfieImage))} alt="" />
            <div className='user-name relative bottom-32'>
                <h3>{CurrentUser.map(x=>(x.name))}</h3>
                <h5>{CurrentUser.map(x=>(x.username))}</h5>
            </div>
            <div className='pro-but gap-2 flex relative bottom-32'>
                <Link to='/chatbox/id'>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faMessage} />
                </button>
                </Link>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faFeed} /> Follow Me
                </button>
                <button className='btn  bg-gray-500'>
                    <FontAwesomeIcon icon={faLink} />
                </button>
            </div>
            <p className='relative bottom-32'>put your bio here nod awa nod</p>
        </div>
    </div>
  )
}
