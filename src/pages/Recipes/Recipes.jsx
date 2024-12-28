import React, { useEffect, useState } from "react";
import { MainApi } from "../../api/Api";

export default function Recipes() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    MainApi
      .get("/recipes?limit=50")
      .then(({ data }) => setRecipes(data.recipes));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {!recipes && <p>Loading....</p>}
      {recipes &&
        recipes.map((recipe, i) => (
          <div key={i}>
            <h2>{recipe.name}</h2>
          </div>
        ))}
    </div>
  );
}
