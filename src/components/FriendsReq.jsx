import React from 'react'
import Firends from '../Data/FriendsData'
import { Link } from 'react-router-dom'
import './FriendsReq.css'

export default function FriendsReq() {
  return (
    <div className="Friend-Requests">
      <h4>Friends Request</h4>
      {
        Firends.map(friend=>(
          <div className='request'>
            <Link to='/profile/id'>
              <div className="info" key={friend.id}>
                <div className="flex items-center gap-2 ">
                      <img className=" w-10 h-10 rounded-full object-cover cursor-defaul" src={friend.img} alt="" />
                      <h4>{friend.name}</h4>
                </div>
                <div className="relative bottom-2 left-10 text-xs ">
                      <p>{friend.info}</p>
                </div>
              </div>
            </Link>
            <div className="action relative left-12 ">
              <button className='btn bg-green-500 text-stone-900 h-10 w-8  '>Accept</button>
              <button className='btn btn-red'>Delete</button>
            </div>
          </div>
      ))}
    </div>
  )
}
