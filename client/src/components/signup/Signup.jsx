import React, { useState } from "react";
import classes from "./signup.module.css";
import img from "../../assets/img5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      if (res.status !== 201) {
        throw new Error("Register Failed")
      }
      const data = await res.json();
      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
  };

  return (
    <div className={classes.signupContainer}>
      <div className={classes.signupWrapper}>
        <div className={classes.signupLeftSide}>
          <img src={img} alt="" className={classes.leftImg} />
        </div>
        <div className={classes.signupRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleRegister} className={classes.signupForm}>
            <input type="text" placeholder="Type Username"  onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" placeholder="Type email"  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Types Password" onChange={(e) => setPassword(e.target.value)} />
            <button className={classes.submitBtn}>Signup</button>
            <p> Already have an account ? <Link to="/login">Login</Link>
            </p>
          </form>
          {error && (
            <div className={classes.errorMessage}>
              Wrong credentials! Try different ones.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
