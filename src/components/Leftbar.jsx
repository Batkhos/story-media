import React from 'react'
import CurrentUser from "../Data/CurrentData"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup,faPeopleGroup,faShop,faCirclePlay,faPhotoFilm,faMessage } from '@fortawesome/free-solid-svg-icons'; 
import './LeftBar.css'

export default function Leftbar() {
  return (
    <div className='LeftBar fixed max-md:hidden'>
      <div className=' left-container'>
        <div className='menu'>
          <Link to='/profile/id'>
            <div className='prof '>
              <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
              <h4 >Batkhos</h4>
            </div>
          </Link>
          <hr className='mt-2' />
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faUserGroup} className="size" />
            <h4>Friends</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faPeopleGroup} className="size" />
            <h4>Groups</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faShop} className="size" />
            <h4>Market</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faCirclePlay} className="size" />
            <h4>Watch</h4>
            </div>
          </Link>
          <hr className='mt-10 ml-2 w-50 h-0.5 bg-gray-400'/>
          <div className='mt-8'>
            
            <h4 className='ml-2 text-xl '>Your Shortcuts</h4>
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faPhotoFilm} className="size" />
            <h4>Gallery</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
            <FontAwesomeIcon icon={faCirclePlay} className="size" />
            <h4>Videos</h4>
            </div>
          </Link>
          <Link to='/chatbox/id'>
            <div className='item'>
            <FontAwesomeIcon icon={faMessage} className="size" />
            <h4>Message</h4>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
