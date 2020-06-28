import React from 'react';
import Logo from './components/Logo';
import MainMenu from './components/MainMenu';
import './App.css';
import ChangeMenu from "./components/ChangeMenu";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter href="/MainMenu">
      <div className='app-changer'>
            <div><Logo/></div>
          <div>
            <div><Route  exact path = '/' component={MainMenu}/></div>
            <div><Route path=  '/ChangeMenu' component={ChangeMenu}/></div>
          </div>
      </div>
      </BrowserRouter>
  );
}


export default App;
