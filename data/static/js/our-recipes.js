const
  prev = $("prev"),
  next = $("next");

const
  recipes = document.getElementsByClassName("recipe");

let
  currentRecipe = 0;

next.onclick = () => {
  if (currentRecipe + 1 < recipes.length) {
    clearAll();
    recipes[++currentRecipe].classList.add("show");
  }
}

prev.onclick = () => {
  if (currentRecipe - 1 >= 0) {
    clearAll();
    recipes[--currentRecipe].classList.add("show");
  }
}

function clearAll() {
  for (const r of recipes) {
    r.classList.remove("show");
  }
}