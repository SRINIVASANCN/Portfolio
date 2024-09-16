import React from 'react'
import'./App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Work/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App

