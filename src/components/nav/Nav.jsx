import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);
  const historiy = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => historiy('/')}
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
          alt="netflex-logo"
        />
        <img
          onClick={() => historiy('/profile')}
          className="nav__avatar"
          src="https://i.pinimg.com/474x/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
