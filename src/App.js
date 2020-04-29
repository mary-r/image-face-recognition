import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputForm from './components/InputForm/InputForm';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Logo />
     <Rank />
     <InputForm />
     {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
