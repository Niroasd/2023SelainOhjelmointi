import React from "react";

const Ingredients = ({ data = [] }) => (
    <ul className="ingredients">
      {data.map((ingredient, i) => (
        <li key={i}>{ingredient.name}</li>
      ))}
    </ul>
  );

export default Ingredients;