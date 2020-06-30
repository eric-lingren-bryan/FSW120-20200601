import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'


function App() {
  return (
    <div className="App">
      Hello!  I'm APP!

      Today We will Cover:
      <ul>
        <ol> Front End Routing </ol>
        <ol> Hooks </ol>
        <ol> Lifecycle Methods </ol>
        <ol> Fetch </ol>
      </ul>

    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/register' component={Register} />
        {/* <ProtectedRoute path='/premium/:id' component={<Premium isAuthed={true} redirect={home} />} /> */}
        {/* <Route path='*' component={404} /> */}
      </Switch>

    </div>
  );
}

export default App;
