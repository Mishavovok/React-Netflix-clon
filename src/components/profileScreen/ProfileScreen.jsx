import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { selectUser } from '../../features/userSlice';

import PlansScreen from '../plansScreen/PlansScreen';
import Nav from '../nav/Nav';
import './ProfileScreen.css';

function ProfileScreen() {
  const auth = getAuth();
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/474x/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.jpg"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button onClick={() => signOut(auth)} className="profileScreen__singOut">
                Sing Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
