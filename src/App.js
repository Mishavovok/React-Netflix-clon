import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './components/homeScreen/HomeScreen';
import LoginScreen from './components/loginScreen/LoginScreen';
import './App.css';

function App() {
  const user = null;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        console.log('вошел');
      } else {
        console.log('не вошел');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <Route path="/" element={<HomeScreen />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
