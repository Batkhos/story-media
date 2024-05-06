import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit , faSearch} from '@fortawesome/free-solid-svg-icons'
import MessageData from "../Data/MessageData"
import { Link } from 'react-router-dom'
import './Message.css'

export default function ChatBox() { 
  return (
    <div className='msg'>
      <div className='message-top'>
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit}/>
      </div>
      <div className='message-search'>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="search" placeholder='Search Message' />        
      </div>
      <div className='border-div'>
        {
          MessageData.map(mess=>(
            <Link to={'/chatbox/id'}>
              <div className='message' key={mess.id}>
                <div className='use'>
                    <img className='w-12 h-10 rounded-full object-cover cursor-default' src={mess.img} alt="" />
                    <div className='green-active '></div>
                </div>
                <div className='m-body'>
                  <h5 className='font-bold'>{mess.name}</h5>
                  <p className='text-xs'>{mess.mText}</p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
