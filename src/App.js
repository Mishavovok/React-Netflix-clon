import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './components/homeScreen/HomeScreen';
import LoginScreen from './components/loginScreen/LoginScreen';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/profileScreen/ProfileScreen';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            user: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
