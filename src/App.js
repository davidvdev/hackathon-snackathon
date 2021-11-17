import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Filters from './pages/Filters';
import Results from './pages/Results';

function App() {

  const blankRecipe = {
    "_id": "",
    "name": "",
    "ingredients": [
      {
        "name": "",
        "amount": "",
        "_id": ""
      }
    ],
    "description": "",
    "__v": 0
  }

  const url = "https://hackathon-snackathon.herokuapp.com/"

  const [filteredRecipe, setFilteredRecipe] = useState(blankRecipe)
  const [randomRecipe, setRandomRecipe] = useState(blankRecipe)
  
  const getFilteredRecipe = async (prefs) => {
    // Set to RANDOM temporarily
    // Change to filtered once data set exists
    const response = await fetch(url + 'recipes/random')
    const data = await response.json()
    setFilteredRecipe(data)
  }

  const getRandomRecipe = async () => {
    const response = await fetch(url + 'recipes/random/')
    const data = await response.json()
    setRandomRecipe(data)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
              <div className="App">
              <h1>Snack Upon</h1>
                <button>Search Random Recipes</button>
                <Link to="/filters">
                  <button>Search With Filters?</button>
                </Link>
            </div>
        }/>
        <Route path="/filters" element={<Filters apiCall={getFilteredRecipe} />} />
        {/* results page commented out until API call implemented */}
        {/* <Route path="/recipes/*" element={<Results />}/> */}
        <Route path="/recipes/*" element={<h1>{randomRecipe.name || "none"}</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;