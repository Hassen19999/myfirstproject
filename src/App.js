import React from 'react'
import Profile from './compoment/Profile';
import './App.css'

function handleName(name) {
  alert(`Hello, my name is ${name}`);
}

function App() {
  return (
    <div className="App">
      <Profile
              fullName="hassen kaffel"
              bio="I am a web developer"
              profession="React Developer"
              handleName={handleName}/>
              <img src="https://st3.depositphotos.com/27847728/33245/v/450/depositphotos_332451796-stock-illustration-letter-logo-design-vector-template.jpg" alt="Profile picture" />
    </div>
  );
}

export default App;