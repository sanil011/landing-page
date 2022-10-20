import React from 'react'
import DSI from '../assets/DSI.svg';
import Image1 from '../assets/image 8.svg'
import Image2 from '../assets/image 9.svg'
import Image3 from '../assets/image 10.svg'
import Image4 from '../assets/image 11.svg'
import Image5 from '../assets/image 14.svg'
import Image6 from '../assets/image 13.svg'

const End = () => {
  return (
    <div className='end'>
        <div className='end-content'>
            <div >
                <div className='end-wrapper new-wrapper'>
                <img src={DSI} className="logo logo-end" alt="logo" />
                <ul className='logo-detail'>
                  <li>DWIDASA</li> 
                  <li>SAMSARA</li> 
                  <li>INDONESIA</li>        
                </ul>   
                  </div> 
                  <div className='address'>
                      
                  <p className='p-head'>PT Dwidasa Samsara Indonesia</p>
                  <p className='p-color'>Ruko Jalur Sutera 29A No. 53<br />
                      Alam Sutera Serpong, Tangerang 15323
                  </p> 
                  </div>
            </div>
            <div className='contact'>
                  <p className='p-contact'>Contact</p>
                  <p className='p-color'>Phone : +62.21.5314.1135<br/>
                     Fax : +62.21.5314.1135<br/>
                     Email : community@dwidasa.com
                  </p>
            </div> 
            <div className='company-icon'>
                <img src={Image1} alt="company" />
                <img src={Image2}  alt="company"/>  
                <img src={Image3}  alt="company"/>
                <img src={Image4}  alt="company"/>
                <img src={Image5}  alt="company"/>
                <img src={Image6}  alt="company"/>
            </div>  
          </div> 
        <footer>Copyright © 2015 - Dwidasa Samsara Indonesia</footer>  
    </div>
  )
}

export default End