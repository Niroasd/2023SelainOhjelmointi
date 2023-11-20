import React from "react";
import { ReactDOM } from "react";
import data from "../src/data/recipes.json";
import Menu from "./components/Menu";

ReactDOM.render(<Menu recipes={data} />, 
    document.getElementById("react-root"));