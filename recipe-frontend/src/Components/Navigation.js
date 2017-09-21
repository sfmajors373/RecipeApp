import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Recipes from './Recipes';
import Home from './Home';
import '../App.css';

export const Navigation = () => {
  return (
    <div>
        <div className="NavBar">
          <NavLink activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/recipes'>Recipes</NavLink>
        </div>
    </div>
  )
};
