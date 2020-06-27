import React from 'react';
import Logo from './components/Logo';
import MainMenu from './components/MainMenu';
import './App.css';

function App() {
  return (
      <div className='app-changer'>
        <div><Logo/></div>
        <div><MainMenu/></div>
      </div>
  );
}


export default App;
