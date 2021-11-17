import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/CSS/landing.css";
import "../src/CSS/filters.css";

import Filters from "./pages/Filters";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons/Buttons";
import RecipeShowPage from "./components/RecipeShowPage";

// import RandomRecipeCard from "./components/RandomRecipeCard";

function App() {
  const blankRecipe = {
    name: "",
    description: "",
    images: "",
    recipeingredientquantities: [],
    recipeingredientparts: [],
    recipeservings: 6,
    recipeinstructions: [],
    cooktimeamt: "",
    cookunitoftime: "",
    preptimeamt: "",
    prepunitoftime: "",
    totalhours: "",
    totalminutes: "",
    christmas: 0,
    thanksgiving: 0,
    hannukah: 0,
    nye: 0,
    breakfast: 0,
    lunch: 0,
    dessert: 0,
    dinner: 0,
    __v: 0,
  };
  const [recipe, setRecipe] = useState(blankRecipe);
  const url = "https://hackathon-snackathon.herokuapp.com/";

  const [filteredRecipe, setFilteredRecipe] = useState(blankRecipe);
  const [randomRecipe, setRandomRecipe] = useState(blankRecipe);
  async function getAppData() {
    const BASE_URL =
      "https://hackathon-snackathon.herokuapp.com/recipes/random";
    const data = await fetch(BASE_URL).then((res) => res.json());
    setRecipe(data);
    // console.log(data)
  }

  useEffect(() => {
    // getAppData();
  }, []);

  const getFilteredRecipe = async (prefs) => {
    console.log(prefs);
    // Set to RANDOM temporarily
    // Change to filtered once data set exists
    const response = await fetch(url + "recipes/filtered", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prefs),
    });
    const data = await response.json();
    console.log("data: ", data);
    setRecipe(data);
  };

  const getRandomRecipe = async () => {
    const response = await fetch(url + "recipes/random/");
    const data = await response.json();
    setRecipe(data);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <h1 className="maintitle">Reci-Please</h1>
              <img src="food.jpg" className="foodimage" />
              <Buttons data={recipe} getAppData={getRandomRecipe} />
            </div>
          }
        />
        <Route
          path="/filters"
          element={<Filters apiCall={getFilteredRecipe} />}
        />
        {/* results page commented out until API call implemented */}
        <Route path="/recipes/*" element={<RecipeShowPage recipe={recipe} />} />
        {/* <Route path="/recipes/*" element={<RandomRecipeCard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
