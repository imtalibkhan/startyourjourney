import React from 'react'
import classes from "./login.module.css"

const Login = () => {
  return (
    <div className={classes.loginContainer}>
     <div className={classes.loginWrapper}>
       <div className={classes.loginLeftSide}>
         <img src={img} className={classes.leftImg}/>
       </div>
       <div className={classes.loginRightSide}>
         <h2 className={classes.title}>Login</h2>
         <form  className={classes.loginForm}>
           <input type="email" placeholder="Type email..."/>
           <input type="password" placeholder="Type password..."/>
           <button className={classes.submitBtn}>Login</button>
           <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
         </form>
         {error && (
           <div className={classes.errorMessage}>
                Wrong credentials! Try different ones.
            </div>
            )}
       </div>
     </div>
    </div>
  )
}

export default Login