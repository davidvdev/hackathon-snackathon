import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../src/CSS/landing.css";

import Filters from "./pages/Filters";
import Results from "./pages/Results";

import Buttons from "./components/Buttons/Buttons";

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
        <Route path="/recipes/*" element={<RandomRecipeCard />} />
      </Routes>
    </Router>
  );
}

export default App;
