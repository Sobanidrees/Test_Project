import './Login.css';
import React from 'react'
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div>
      <LoginHeader />
      <LoginForm setloading={props.setloading}/>
    </div>
  )
}
