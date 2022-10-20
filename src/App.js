import React from 'react'
import Navbar from './component/Navbar';
import About from './component/About';
import Welcome from './component/Welcome';
import Services from './component/Services';
import End from './component/End';
const App = () => {
  return (
      <div>
          <Navbar />
          <About />
          <Welcome />
          <Services />
          <End/>
    </div>
  )
}

export default App