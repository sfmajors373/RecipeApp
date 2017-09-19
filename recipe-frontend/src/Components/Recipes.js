// Recipes component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipes } from '../actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <div>
        <h1>I am the list of recipes</h1>
        <ul className='RecipesNames'>
          {this.props.recipes.map((recipe, i) => {
            return (
              <li><Link key={recipe._id} to={`/recipe/${recipe._id}`}>
                {recipe.name}
              </Link></li>
            );
          })}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecipes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
