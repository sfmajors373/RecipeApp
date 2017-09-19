import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './App.css';
import Recipes from './Components/Recipes';
import OneRecipe from './Components/OneRecipe';
import Home from './Components/Home';
import { Navigation } from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/recipes' component={Recipes} />
            <Route exact path='/recipe/:id' component={OneRecipe} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
