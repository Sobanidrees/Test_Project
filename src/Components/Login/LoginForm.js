import "./LoginForm.css";

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./Firebase";
export default function LoginForm(props) {

  const [valid, setvalid] = useState(false);
  const [Disable, setDisable] = useState(true);
  const [buttonColor, setButtonColor] = useState("Disable");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let navigate = useNavigate();

  const onLoginHandler = () => {
    props.setloading(true);
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigate("/dash-board");
          props.setloading(false);
          setvalid(false);
        }
      })
      .catch((error) => {
        setvalid(true);
      });
  };
  const onChangeHandler = () => {
    setDisable(false);
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setButtonColor("Disable");
    } else {
      setButtonColor("login");
    }
  };
  const onFrogotPassword = () => {
  
    if (emailRef.current.value) {
      props.setloading(true);
      sendPasswordResetEmail(auth, emailRef.current.value)
        .then(() => {
          emailRef.current.value = "";
          props.setloading(false);
          alert("Check Your Inbox");
        })
        .catch((error) => {
          alert(error);
          props.setloading(false);
        });
    } else {
      alert("Please Enter Correct Email First ");
    }
  };
  return (
  
     
      <div className="Cont">
        <div className="LFCointainer">
          <h1 className="log">Login</h1>
          {valid ? (
            <h3 className="error">Please enter valid Password or Email</h3>
          ) : null}
          <div className="Label">
            <label className="label">Email address</label>
            <input
              type="text"
              className="inp"
              ref={emailRef}
              onChange={onChangeHandler}
            />
          </div>
          <div className="Label">
            <label className="label">Password</label>
            <input
              type="password"
              className="inp"
              ref={passwordRef}
              onChange={onChangeHandler}
            />
          </div>
          <button
            className={buttonColor}
            onClick={onLoginHandler}
            disabled={Disable}
          >
            Log in
          </button>
          <p className="forgot" onClick={onFrogotPassword}>
            Forgot Your Password?
          </p>
        </div>
      </div>

  );
}
