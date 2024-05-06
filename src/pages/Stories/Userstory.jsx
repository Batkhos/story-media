import React from 'react'
import CurrentUser from '../../Data/CurrentData'
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Userstory() {
  return (
        <div className='relative bottom-6'>
            <div>
                 <img className=' relative left-3 top-14 mt-3 mb-2 w-10 h-10 rounded-full object-cover cursor-defaul' src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
            </div>
            <img className='flex h-72 w-52 object-fit rounded-lg ' src={CurrentUser.map(user=>(user.CoverPhoto))} alt="" />
               <label className='relative bottom-16 md:size-4' htmlFor="storyFiles">
                    <FontAwesomeIcon className='relative bottom-4 left-20 bg-purple-400 w-10 h-10 rounded-full text-white' icon={faAdd}/>
                    <input className="hidden" type="file" id='storyFiles' />
               </label>
               <h5 className='relative bottom-20 left-16 text-white' >Add Story</h5>
       </div>
  )
}
