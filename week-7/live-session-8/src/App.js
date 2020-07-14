import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TweetsList from './components/TweetsList'
import Login from './components/Login'

const App = () => {

  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/tweets' component={TweetsList} />
      </Switch>

    </div>
  );
}

export default App