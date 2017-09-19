import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';
import Home from './Home';
import '../App.css';

export const Navigation = () => {
  return (
    <div>
        <div className="NavBar">
          <Link to='/'>Home</Link>
          <Link to='/recipes'>Recipes</Link>
        </div>
    </div>
  )
};
