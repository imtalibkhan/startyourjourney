import React from 'react'
import About from '../about/About'
import classes from "./home.module.css"
// import Types from "../type/Type"
import SuggestedPlace from '../suggestedPlaces/SuggestedPlace'
import Types from '../types/Types'

const Home = () => {
  return (
    <div>
       <About />
       
        <Types />
        <SuggestedPlace />
        
    </div>
  )
}

export default Home