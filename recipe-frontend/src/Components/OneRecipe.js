// recipe
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipesById } from '../actions';

class OneRecipe extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRecipesById(this.props.match.params.id);
  }
  render() {
    // if (this.props.recipes === null) {
    //   // console.log('this is a problem');
    //   return null;
    // }
    return (
      <div>
        // <h1>I am a recipe</h1>
        <div>
          <h1>{`Name: ${this.props.recipes.ingredients}`}</h1>
          // <h3>Ingredients:</h3>
          <h1>{`Ingredients: ${this.props.recipes.ingredients}`}</h1>
          // <ul className='ingredients'>
          //   {this.props.recipes.ingredients.map((ingredient, i) => {
          //     return (
          //       <li key={i}>{this.props.recipes.ingredient}</li>
          //     )
          //   })}
          // </ul>
          // <h3>Steps:</h3>
          <h1>{`Steps: ${this.props.recipes.steps}`}</h1>
          // <ul className='steps'>
          //   {this.props.recipes.steps.map((step, i) => {
          //     return (
          //       <li key={i}>{this.props.recipes.step}</li>
          //     )
          //   })}
          // </ul>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { getRecipesById })(OneRecipe)
