import React, { useEffect, useState } from "react";
import classes from "./types.module.css";
import {Link} from "react-router-dom"
import img1 from "../../assets/img7.jpg"

const Types = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGJhNTFlOTRjMDAzNTAyYzdmMDYyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTMzOTAzOH0.3kQZzpFAhxG0MiddPlpsulCxXu9fQpIyIuucDpN4CCk";

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch(`http://localhost:5000/room/find/types`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const types = await res.json()
        console.log("Typesss===",types)
        setTypes(types)
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypes()
  }, []);

  console.log(Object.entries(types))

  return (
    <section id="services" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitles}>Residing Plce</h5>
          <h2 className={classes.title}>what type of place do you want</h2>
        </div>

        <div className={classes.types}>
          {Object.entries(types).map(([key, value])=>(
            <Link to={`/types/${key}`} key={key+value} className={classes.type} >
              <div className={classes.imgWrapper}>
                <img src={img1} alt="" />
              </div>
              <span>{key} {value}</span>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Types;
