import React from 'react'
import Pana from '../assets/pana.svg';
const About = () => {
  return (
    <div className='about'>
          <div className='text'>
              <div className='text-primary'>
              <h1>Making the most of the<br/> ever-growing <span><br/>Information Technology</span> </h1>
              <p>Managed by team of professional experts with extensive experience
                  and impressive track records.</p>
              <button className='read-more'>Read More</button>
              </div>
          </div>   
          <div className='image'>
              <div className='image-primary'>  
               <img className='about-image' src={Pana} alt="pana-img"/> 
              </div>
          </div>
    </div>
  )
}

export default About