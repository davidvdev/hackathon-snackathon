import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import MyCard from '../MyCard'

const Buttons = (props) => {
    
    const [randomRecipe, setRandomRecipe] = useState(0)
    const random = (obj) => {
        setRandomRecipe ({...randomRecipe, obj})
    }
    function randomButton (props) {
        
        
        console.log(randomRecipe)
        random(props.data)
        props.getAppData()
        
        
        // console.log(props.data)
    }
    
    return (
        <div>
            {randomRecipe !== 0 &&
                <>
                    <h1>{randomRecipe.obj.name}</h1>
                    <h2>{randomRecipe.obj.description}</h2>
                    <h3>{randomRecipe.obj.recipeingredientparts}</h3>
                    <h4>{randomRecipe.obj.recipeingredientquantities}</h4>
                </>
            }
            <div className='buttons'>
                <div className='button'>
                <h2>Click for a Random Recipe</h2>
                <img src=''/>
                    <button onClick={() => randomButton(props)}>Random Recipe</button>
                </div>
                <div className='button'>  
                    <h2>Search for a Recipe</h2>
                    <img src=''/>
                    <Link to='/filters'>
                        <button>Find a Recipe</button>
                    </Link>  
                </div>
            </div>          
        </div>
    )
}



export default Buttons