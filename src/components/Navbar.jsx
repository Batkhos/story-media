import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEnvelope, faHome ,faSearch,faUser } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using free solid icons
import CurrentUser from '../Data/CurrentData'
import DarkMood from './DarkMode';
import './Navbar.css'

export default function Navbar() {
  return (
  
    <div className='nav-container h-14 w-screen fixed flex text-black items-center justify-center  z-10 bg-orange-400 max-md:h-14 '>
    <div className='w-5/6 flex items-center justify-between '>
      <div className='flex items-center gap-8 max-md:gap-1'>
        <Link to='/'><h3 className='font-bold text-xl text-orange-800 relative right-24 max-md:right-11'>Story-Day</h3></Link>
        <Link to='/'><FontAwesomeIcon className='text-lg relative max-md:right-4' icon={faHome} /></Link>
        <Link to='/Profile/id'><FontAwesomeIcon className='text-lg relative max-md:right-2' icon={faUser} /></Link>
        <div className="relative rounded-sm shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
          <span className="text-black max-md:relative max-md:right-1"><FontAwesomeIcon className=' items-center text-lg ' icon={faSearch}/></span>
        </div>
        <input
          type="search"
          className=" max-md:w-44  block w-72  rounded-xl border-0 h-8 pl-8 pr-3 pb-0.5 font-semibold  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 "
          placeholder="Search"
        />
        </div>
        <div className='nav-right flex gap-5 items-center absolute start-3/4 '>
        <Link to='/chatbox/:id'><FontAwesomeIcon  className='text-lg max-md:relative max-md:right-12' icon={faEnvelope}/></Link>
        <Link to='/'><FontAwesomeIcon  className='text-lg max-md:relative max-md:right-12' icon={faBell}/></Link>
        {/* <Link to='/'><FontAwesomeIcon  className='text-lg' icon={faBars}/></Link> */}
        <DarkMood/>
        <div className='flex items-center gap-3  max-md:relative max-md:right-6 max-md:gap-0'>
          <img className='w-9 h-9 rounded-full max-md:object-cover' src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4 className='font-semibold max-md:hidden'>Batkhos</h4>
        </div>
        </div>
      </div>
    </div>
    </div>

  )
}
