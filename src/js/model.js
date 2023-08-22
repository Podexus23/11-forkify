import { async } from 'regenerator-runtime';

const api_key = `d5dc34bb-1546-4f27-a4eb-e070224fd794`;

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${api_key}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    console.log(res, data);
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
    console.log(`💥 ${error}`);
  }
};
