import React from 'react'
import Pana2 from "../assets/pana1.svg";
const Welcome = () => {
  return (
    <div className='welcome'>
          <div className='col-1'>
              <div className='image-welcome'>
              <img className='welcome-image' src={Pana2} alt="person-withPC"/> 
              </div>
          </div>
          <div className='col-2'>
              <h1>Welcome to <span>Dwidasa Samsara <br/> Indonesia(DSI)</span></h1>
              <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, 
                  who each of them has a common end objective to innovate new creations by making the 
                  most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based 
                  application concept.
              </p>

              <p>Managed by a team of professional experts with extensive experience and impressive track records,
                  <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively
                  and efficiently.
              </p>  
          </div>
    </div>
  )
}

export default Welcome