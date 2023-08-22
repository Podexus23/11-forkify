import { async } from 'regenerator-runtime';
import { API_URL, api_key } from './config.js';
import { getJSON } from './helpers.js';

const api_key = `d5dc34bb-1546-4f27-a4eb-e070224fd794`;

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}?key=${api_key}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    console.error(`model error: ${error} 💥`);
  }
};
