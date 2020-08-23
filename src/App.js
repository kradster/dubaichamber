import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Live from './components/Live/Live';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Landingpage/>
        </Route>
        <Route exact path="/register" >
          <Register/>
        </Route>
        <Route exact path="/live" >
          <Live/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
