import React from 'react'
import './AddPost.css'
import xx from '../Data/CurrentData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo,faImage, faTags,faSmile } from '@fortawesome/free-solid-svg-icons'

export default function AddPost() {
  return (
    <form className='post'>
        <div className='user form-top'>
            <img src={xx.map(x=>(x.ProfieImage))} alt="" />
            <input type="text" placeholder="What's on your mind ?" />
            <button type='sublit' className='btn btn-primary'>Post</button>
        </div>
        <div className='post-categories'>
          <label htmlFor="file">
            <input type="file"  id='file' />
            <span><FontAwesomeIcon icon={faImage}/> Image</span>
          </label>
          <label htmlFor="file">
            <input type="file" id='file' />
            <span><FontAwesomeIcon icon={faVideo}/> Video</span>
          </label>
          <span><FontAwesomeIcon icon={faTags} /> Tags</span>
          <span><FontAwesomeIcon icon={faSmile}/> Feelings</span>
        </div>
    </form>
  )
}
