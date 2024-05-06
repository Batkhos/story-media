import React,{useEffect,useState} from 'react';
import StoryData from '../../Data/StoriesData';
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
// import {faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Userstory from './Userstory';
import './stories.css'

export default function Stories() {
    const [stories, setStories] = useState(StoryData);
  
    // Optional functionality for handling viewed stories (using useEffect)
    useEffect(() => {
      // Simulate story viewing after a delay (replace with your logic)
      const timeoutId = setTimeout(() => {
        setStories((prevStories) =>
          prevStories.map((story) => ({ ...story, seen: true }))
        );
      }, 3000); // Adjust delay as needed
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    const handleStoryClick = (storyId) => {
      // Handle story click event (e.g., open detailed view)
      console.log(`Story ${storyId} clicked!`);
    };
  
    return (
      <>
      <div className="stories">  
      <div className='userstory  '> <Userstory/></div>            
        <Swiper
          spaceBetween={10} // Adjust spacing between stories
          slidesPerView="auto" // Adjust based on desired number of stories per row
          breakpoints={{
            // Optional responsive adjustments
            640: {
              slidesPerView: 2, // Show 2 stories per row on medium screens
            },
            1024: {
              slidesPerView: 3, // Show 3 stories per row on large screens
            },
          }}
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div
                className="story "
                // {`story ${story.seen ? 'seen' : ''}`} // Add 'seen' class conditionally
                // onClick={() => handleStoryClick(story.id)}
              >
                <div className="user ">
                  <img src={story.storyProfile} alt=""/>
                  <h5>{story.name}</h5>
                </div>
                <img className='storye' src={story.story} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </>
    );
  }
  