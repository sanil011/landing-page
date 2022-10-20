import React from 'react';
import  Card from './Card';
import Product from '../assets/regular.svg';
import Cogwheel from '../assets/cogwheel.svg';
import Verified from '../assets/verified.svg'
const Services = () => {
  return (
    <div className='service'>
          <h1>Product and Services</h1>
          <div className='service-details'> 
          <Card src={Product} about={"Our product is made on the base of our team’s careful research and analyses, ranging from internet based application."}
           heading={"Our Product"}
          />
          
          <Card src={Verified} about={"DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors."} 
              heading={"Our Services"}
          />

          <Card src={Cogwheel} about={"First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."}
             heading={"Our Technology"}
          />
          </div>
    </div>
  )
}

export default Services