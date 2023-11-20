import React from "react";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

const Recipe = ({ name = "untitled", ingredients = [], steps = [] }) => (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Ingredients data={ingredients} />
      <Instructions data={steps} />
    </section>
  );

export default Recipe;