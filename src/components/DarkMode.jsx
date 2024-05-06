import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'; 
import './DarkMode.css'

const DarkMood = () => {
  
    const toggleDarkMode = () => {
      document.querySelector('body').classList.toggle('darkmood')
    };

  return (
    <div className='dark-mood-icon  '>
        <FontAwesomeIcon  className="max-md:relative max-md:right-12" icon={faMoon} onClick={toggleDarkMode} />
    </div>
  )
}
export default  DarkMood


 


