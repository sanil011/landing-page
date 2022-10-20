import React,{useState} from 'react'
import DSI from '../assets/DSI.svg'
import Mail from '../assets/mail.svg';
import Shuffle from '../assets/shuffle.svg';
import Union from '../assets/Union.svg';
const Navbar = () => {
  const [showLinks , setShowLinks] = useState(false);

    function  myFunction () {

        setShowLinks(!showLinks); 

}
    return (
        <header className='primary-header'>
          <div className='container'>
            <div className='new-wrapper'>
                <img src={DSI} className="logo" alt="logo" />
                <ul className='logo-detail'>
                  <li>DWIDASA</li> 
                  <li>SAMSARA</li> 
                  <li>INDONESIA</li>        
                </ul>   
          </div>
          <div className={`${showLinks ? 'back-slider back-on' : "back-slider "}`}  >
             <ul aria-label="Primary" role="list" class="slider">
                  <li><a className='slider-item' href="#">Service</a></li>
                  <li><a className='slider-item' href="#">Product</a></li>
                  <li><a className='slider-item' href="#">Technology</a></li>
                  <li><select className='option-tag' ><option>About</option></select></li>
                  <li><select className='option-tag' ><option>Client</option></select></li>
                  <li><a className='slider-item' href="#">Partner</a></li>
                  </ul>
          </div>
            <nav class="primary-navigation" id="primary-navigation">
                  <ul aria-label="Primary" role="list" class="nav-list">
                  <li><a className='anchor-tag' href="#">Service</a></li>
                  <li><a className='anchor-tag' href="#">Product</a></li>
                  <li><a className='anchor-tag' href="#">Technology</a></li>
                  <li><select className='option-tag' ><option>About</option></select></li>
                  <li><select className='option-tag' ><option>Client</option></select></li>
                  <li><a className='anchor-tag' href="#">Partner</a></li>
                  </ul>
          </nav>
          
          
          <nav className='primary-icon'>
            <div className={`${showLinks ?'container1 change':"container1" }`} onClick={ myFunction}>
           <div className= "bar1"></div>
           <div className="bar2"></div>
           <div className="bar3"></div>
           </div>
              <ul className='icon-detail'>
                  <li><img src={Union} alt="icon-union"/> </li> 
                  <li><img src={Mail} alt="icon-mail"/> </li> 
                  <li><img src={Shuffle} alt="icon-Shuffle"/> </li>        
                </ul>        
            </nav>   
         </div> 
    </header>
  )
}

export default Navbar