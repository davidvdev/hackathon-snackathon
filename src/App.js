import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/CSS/landing.css";

import Filters from "./pages/Filters";
import Results from "./pages/Results";
import Buttons from "./components/Buttons/Buttons";
import RecipeShowPage from "./components/RecipeShowPage";

function App() {
  const [recipe, setRecipe] = useState([]);

  const blankRecipe = {
    _id: "",
    name: "",
    ingredients: [
      {
        name: "",
        amount: "",
        _id: "",
      },
    ],
    description: "",
    __v: 0,
  };

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
    getAppData();
  }, []);

  const getFilteredRecipe = async (prefs) => {
    console.log(prefs);
    // Set to RANDOM temporarily
    // Change to filtered once data set exists
    const response = await fetch(url + "recipes/random");
    const data = await response.json();
    setFilteredRecipe(data);
  };

  const getRandomRecipe = async () => {
    const response = await fetch(url + "recipes/random/");
    const data = await response.json();
    setRandomRecipe(data);
  };
  const testrecipe = {
    name: "Turnip and Onion Hot Dish",
    description:
      "This is a delicious dish that goes well with most winter main dishes.  It is very easy to make and is a good alternative to scalloped potatoes.",
    images:
      "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/12/51/39/picPFVZcX.jpg",
    recipeingredientquantities: ["2", "2", "NA", "1", "1/2", "2"],
    recipeingredientparts: [
      "turnips",
      "onions",
      "chicken bouillon cube",
      "boiling water",
      "butter",
      "margarine",
    ],
    recipeservings: 6,
    recipeinstructions: [
      "Preheat oven to 400 degrees F.",
      "Peel turnips",
      "cut in half lenthwise",
      "then slice each half crosswise into thin slices.",
      "Arrange alternate layers of turnip and onion in a greased 2 1/2-quart casserole dish.",
      "Sprinkle lightly with salt and pepper.",
      "Dissolve bouillon cube in boiling water and pour over vegetables.",
      "Dot with butter or margarine.",
      "Cover casserole with foil or lid and bake 1 hour 15 minutes",
      "or until turnips are tender.",
    ],
    cooktimeamt: "1",
    cookunitoftime: "H",
    preptimeamt: "15",
    prepunitoftime: "M",
    totalhours: "1",
    totalminutes: "30",
    christmas: 1,
    thanksgiving: 0,
    hannukah: 0,
    nye: 0,
    breakfast: 0,
    lunch: 0,
    dessert: 0,
    dinner: 1,
    __v: 0,
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <h1>Reci-Please</h1>
              <Buttons data={recipe} getAppData={getRandomRecipe} />
            </div>
          }
        />
        <Route
          path="/filters"
          element={<Filters apiCall={getFilteredRecipe} />}
        />
        {/* results page commented out until API call implemented */}
        {/* <Route path="/recipes/*" element={<Results />}/> */}
        <Route
          path="/recipes/*"
          element={<RecipeShowPage recipe={testrecipe} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
