import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from "./components/About/About"
import Blogs from './components/Blog/Blogs'
import OurMenu from './components/Menu/OurMenu'
import ContactUs from './components/contact us/ContactUs'
import Footer from './Footer'

const App = () => {
  return (
    
    <div className='overflow-x-hidden' >
      <Navbar/>
      <Home/>
      <About/>
      <OurMenu/>
      <Blogs/>
      <ContactUs/>
      <Footer/>
    </div>

  
    
  )
}

export default App