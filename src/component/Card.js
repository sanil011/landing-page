import React from 'react'

 const Card = ({src , heading ,about}) => {
  return (
      <div className='card'>
          <div className='card-content'>  
          <img src={src} alt="image" />
          <h3>{heading}</h3>
          <p>{about}</p>
          <button className='read-more card-btn'>Read More</button>
          </div>
    </div>
  )
}

export default Card;