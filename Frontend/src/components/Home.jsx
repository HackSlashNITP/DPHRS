import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import CardList from './CardList'
import Works from './Works'

function Home() {
  return (
    <>
   <Navbar />
    <Hero />
    <h1 id='testimonial'>  Features</h1>
    <Feature />
    <h1 id='testimonial'>Testimonials</h1>
    <CardList />
   

    
   </>
  )
}

export default Home;