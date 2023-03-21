import React, { useState } from 'react';
import SignupScereen from '../signupScereen/SignupScereen';
import './loginScreen.css';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__beckground">
        <img
          className="loginScreen__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
          alt="netflix-logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScereen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSignIn(true)} className="lodinScreen__getStarted">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
