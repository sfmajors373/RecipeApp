import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dragonov Family Recipes</h2>
        </div>
        <p className='App-intro'>
          This is a compilation of our family recipes so that the family has access to them without calling at odd hours, waiting impatiently as someone finds the recipe and sends a picture of it... for the 100th time.
        </p>
      </div>
    )
  }
}

export default Home;
