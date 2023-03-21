import React, { useRef } from 'react';

import { createUser, signInUser } from '../../firebase';

import './signupScreen.css';
function SignupScereen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const register = async () => {
    try {
      let registerResponse = await createUser(emailRef.current.value, passwordRef.current.value);
      console.log(registerResponse.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const singIn = async (event) => {
    try {
      let loginResponse = await signInUser(emailRef.current.value, passwordRef.current.value);
      console.log(loginResponse.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signupScreen">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={singIn}>
          Sing In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sing Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScereen;
