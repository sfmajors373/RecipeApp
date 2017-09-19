// reducers

import { combineReducers } from 'redux';
import { GET_RECIPES, GET_RECIPES_BY_ID } from '../actions';

const recipesReducer = (recipes = [], action) => {
  switch(action.type) {
    case GET_RECIPES:
      return action.payload.data;
    case GET_RECIPES_BY_ID:
      return action.payload.data;
    default:
      return recipes;
  }
};

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default rootReducer;
