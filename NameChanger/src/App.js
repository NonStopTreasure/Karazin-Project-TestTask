import React from 'react';
import Logo from './components/Logo';
import MainMenu from './components/MainMenu';
import './App.css';
import ChangeMenu from "./components/ChangeMenu/ChangeMenu";

function App() {
  return (
      <div className='app-changer'>
            <div><Logo/></div>
            {/*<div><MainMenu/></div>*/}
            <div><ChangeMenu/></div>
      </div>
  );
}


export default App;
