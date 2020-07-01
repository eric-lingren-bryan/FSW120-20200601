import React from 'react';
import './App.css';
import { Switch, Route  } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Register from './Register'


const App = () => {
  return (
    <div className="App">
      Hello!  I'm APP!

      <h4> Today We will Cover: </h4>
      <ul>
        <ol> Front End Routing </ol>
        <ol> Hooks </ol>
        <ol> Lifecycle Methods </ol>
        <ol> Fetch </ol>
      </ul>
      <Navbar />

      <Switch>
        <Route exact path='/' component={ () => <Home /> } />
        <Route path='/about' component={About}/>
        <Route path='/register/again' component={Register}/>
        <Route path='/register' component={Register}/>
        <Route path='/register/:id' component={Register}/>
        <Route path='/google' component={() => (window.location ="https://www.google.com")} />
        {/* <Route path='/*' component={404}/> */}
      </Switch>

    </div>
  );
}

export default App;
