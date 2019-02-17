import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'

import Login from './components/Login';
import Campaign from './components/Campaign';
import Admin from './components/Admin'

const App = () => (
  <BrowserRouter>
      <div className = "container">
        <Route exact path="/" component= {Login}/>
        <Route path="/campaign" component= {Campaign}/>
        <Route path="/admin" component= {Admin}/>
      </div>
  </BrowserRouter>
);

export default App;
