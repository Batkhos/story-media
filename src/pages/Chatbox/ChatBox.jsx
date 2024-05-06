import React from 'react'
import Stories from '../Stories/Stories'
import CurrentUser from '../../Data/CurrentData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function ChatBox() {
  return (
    <div className='mt-12'>
      <Stories/>
      <div className='feed  h-96 w-3/4 rounded-2xl relative left-12 top-12'>
        <div className='flex items-center bg-gray-300 rounded-lg' >
          <img className='profile w-16 object-cover m-2 rounded-full' src={CurrentUser.map(x=>(x.ProfieImage))} alt="" />
          <div className='w-4 h-4 bg-green-500 rounded-full absolute left-14 top-14'></div>
          <div>
          <h5>{CurrentUser.map(x=>(x.name))}</h5>
          <h6 className='relative left-1'>{CurrentUser.map(x=>(x.username))}</h6>
          </div>
        </div>
        <div className='items-center absolute bottom-0 left-1 '>
          <form action="#">
            <input type="text" className='w-96 border-2 rounded-full text-black font-semibold border-gray-400 h-12 p-2' placeholder='Write Message'/>
            <button type='submit' className='btn btn-primary h-12  ml-2.5 mr-1'><FontAwesomeIcon className='' icon={faArrowAltCircleRight}/></button>
            <label className='btn btn-primary h-12 relative bottom-1' htmlFor='CFile'>
              <input className=' hidden' type="file" id="FileAlt" />
              <FontAwesomeIcon icon={faFileAlt}/>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}
