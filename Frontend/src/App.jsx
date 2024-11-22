import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/home'
import Navbar from './components/Navbar/navbar'
// import CardList from './components/Testimonial/CardList'
// import Feature from './components/Features/feature.jsx'
function App() {

   
  return (
    <>
          <Navbar/>
            <Home/>
            {/* <h1 id='testimonial'>  Features</h1>
            <Feature/>
            <h1 id='testimonial'>Testimonials</h1>
           <CardList /> */}
        
    </>
  )
}

export default App
