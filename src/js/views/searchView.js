import { elements } from "./base";
export const getInput = () => elements.searchInput.value;

export const clearInput = () => (elements.searchInput.value = "");

export const clearResults = () => (elements.searchResList.innerHTML = "");

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

const renderRecipe = recipe => {
  const rec = recipe.recipe;
  console.log(recipe.recipe);
  console.log(rec.image);
  console.log(rec.label);
  console.log(rec.source);

  const markup = `
    <li>
        <a class="results__link" href="#${rec.uri}">
            <figure class="results__fig">
                <img src="${rec.image}" alt="${rec.label}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(rec.label)}</h4>
                <p class="results__author">${rec.source}</p>
            </div>
        </a>
    </li>
`;
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
