import React from "react"
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Contacts</h2>
          <a href="https://www.linkedin.com/in/abutalib-khan-1b66a6226/"><span>Abutalib Khan: </span>Linkedin</a>
          <a href="https://twitter.com/imtalibkhan/"><span>Twitter: </span>Abutalib Khan</a>
          <a href="https://github.com/imtalibkhan"><span>Github: </span>Abutalib Khan</a>

          
         
        </div>
        <div className={classes.col}>
          <h2 className={classes.title}>Privacy policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            facere error fuga, molestiae cumque, ipsam autem corporis nemo
            deleniti accusantium soluta voluptate enim magni doloremque harum
            nam sit tenetur eius?
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer