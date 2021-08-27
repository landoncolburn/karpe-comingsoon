import React, { useState } from "react";
import validator from 'validator';

import './App.css';
import Logo from './KarpedieumLogo.png';

function App() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const handleSubmit = (e) => {
    if(emailError === 'Valid Email :)'){
      fetch('https://api.karpedieum.com/api/v1/notify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: e.target[0].value, date: new Date() })
      }).then(window.location.reload());
    }
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="header">
        <img src={Logo} alt="Karpedieum Brand Logo" className="logo" />
        <svg className="hamburger" viewBox="0 0 100 70" width="40" height="40">
          <rect y="0" width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
      <div className="App-header">
        <h1>Coming soon...</h1>
        <div className="text-wrap">
          <h4>A modern calendar for modern lives. Taking productivity to the next level. Enter your email below to stay up to date on development and news regarding Karpedieum Calendar.</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <span style={{color: `${emailError === 'Valid Email :)' ? '#4D6DFA' : '#C72602'}`}} className="error">{emailError}</span>
          <input className="email" onChange={(e) => validateEmail(e)} type="email" placeholder="john@email.com"></input>
          <input className="submit" type="submit" value="Notify Me!" />
        </form>
      </div>
    </div>
  );
}

export default App;
