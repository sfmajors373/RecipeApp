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
    let temp = this.props.recipes.ingredients
    console.log(temp);
    console.log(this.props.recipes.ingredients);
    console.log(typeof temp);
    console.log(typeof this.props.recipes.steps);
    console.log('am i an array');
    console.log(Array.isArray(this.props.recipes.ingredients));
    console.log(typeof [1, 2, 3, 4]);
    console.log(this.props.recipes);
    if (this.props.recipes === null) {
      console.log('this is a problem');
      return null;
    }
    console.log('here');
    return (
      <div>
      <h1>{this.props.recipes.name}</h1>
      <h2>{`Prep Time: ${this.props.recipes.prepTime}`}</h2>
      <h2>{`Bake Time: ${this.props.recipes.bakeTime}`}</h2>
      <h2>{`Bake Temp: ${this.props.recipes.bakeTemp}`}</h2>
      <h2>{`Source: ${this.props.recipes.source}`}</h2>
      <h2>{`Ingredients: ${this.props.recipes.ingredients}`}</h2>
      <h2>{`Steps: ${this.props.recipes.steps}`}</h2>
      </div>
       //<div className='container'>
        // <h1>I am a recipe</h1>
         //<div className='child'>
          // <h3>Ingredients:</h3>
          //{this.props.recipes.ingredients.map((ingredient, i) => {
          /*<ul className='ingredients'>
          {temp.map((ingredient, i) => {
              //return (
              //  <li key={i}>{this.props.recipes.ingredient[i]}</li>
              //)
            })}
          </ul>
*/
          // <h3>Steps:</h3>
          // <h1>{`Steps: ${this.props.recipes.steps}`}</h1>
          // <ul className='steps'>
          //   {this.props.recipes.steps.map((step, i) => {
          //     return (
          //       <li key={i}>{this.props.recipes.step}</li>
          //     )
          //   })}
          // </ul>
         //</div>
         //</div>
   );
  };
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { getRecipesById })(OneRecipe)
