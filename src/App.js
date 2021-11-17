import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Buttons from './Components/Buttons/Buttons'

function App() {
  const [recipe, setRecipe] = useState([])

  async function getAppData() {
    const BASE_URL = 'https://hackathon-snackathon.herokuapp.com/recipes/random'
    const data = await fetch(BASE_URL).then(res => res.json())
    setRecipe(data)
    console.log(data)
  }

  useEffect(() => {
    getAppData()
  }, [])

  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
              <div className="App">
                <h1>Reci-Please</h1>
                <Buttons data={recipe} getAppData={getAppData}/>
            </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;