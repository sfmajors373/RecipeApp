// actions

import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_ID = 'GET_RECIPES_BY_ID';

export const getRecipes = () => {
  const promise = axios.get(`http://localhost:8080/recipes`);
  return {
    type: GET_RECIPES,
    payload: promise
  };
};

export const getRecipesById = (id) => {
  const promise = axios.get(`http://localhost:8080/recipe/${id}`);
    return {
      type: GET_RECIPES_BY_ID,
      payload: promise
    };
};
