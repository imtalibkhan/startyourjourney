// import React from 'react'
import React, { useEffect, useState } from "react"
import classes from "./suggestedPlaces.module.css"
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import img from '../../assets/img2.jpg'
import { AiFillStar } from "react-icons/ai"







const SuggestedPlace = () => {
  
  const [estates, setEstates] = useState([])
  const { token } = useSelector((state) => state.auth)
  // const { type } = useParams()

  useEffect(() => {
    const fetchTypeRooms = async () => {
      try {
        const res = await fetch(`http://localhost:5000/room`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const estates = await res.json()
        // console.log("estates",estates)
        setEstates(estates)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTypeRooms()
  }, [])


  return (
        <section id='suggested' className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>Most visited places</h5>
          <h2 className={classes.title}>
            Favourite destinations of our clients
          </h2>
        </div>
        <div className={classes.places}>
          {estates.map((suggestedPlace) => (
            <Link className={classes.place} key={suggestedPlace._id} to={`/typeDetail/${suggestedPlace._id}`}  >
              <div className={classes.imgWrapper}>
                <img src={img} alt="" />
              </div>
              
              <div className={classes.titleAndReview}>
                <span>{suggestedPlace.title}</span>
                <span className={classes.review}><AiFillStar className={classes.icon} />{suggestedPlace.review} (2)</span>
              </div>
              <div className={classes.countryAndPrice}>
                <span>Country: <span>{suggestedPlace.country}</span></span>
                <span className={classes.price}>{suggestedPlace.price}$ / <span>per person</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuggestedPlace   




