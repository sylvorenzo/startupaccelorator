import './App.css';
import HomePage from './components/home';
import RegistrationPage from './components/registration';
import React, {useState,useEffect} from 'react';
import {auth} from './fire';
import {onAuthStateChanged} from 'firebase/auth';
function App() {
  //create state manager
  const [user, setUser] = useState('');
  //create an authication listener function
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      }
    })
  }
  //listens for changes happening within web app
  useEffect(() => {
    authListener();
  }, [])
  return (
    <div>
      {user ? (
        <HomePage />
      ) : (
        <RegistrationPage />
      )}

    </div>
  );
}

export default App;
