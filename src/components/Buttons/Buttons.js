import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import MyCard from '../MyCard'

const Buttons = (props) => {
    
    const [randomRecipe, setRandomRecipe] = useState(0)
    const random = (obj) => {
        setRandomRecipe ({...randomRecipe, obj})
    }
    // function randomButton (props) {
        
        
    //     console.log(randomRecipe)
    //     random(props.data)
    //     props.getAppData()
        
        
    //     // console.log(props.data)
    // }
    
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
                <Link to="/recipes/random" className="button">
                    <div onClick={props.getAppData}>
                        <h2>Find a Random Recipe</h2>
                        <img src='suprise_me.png' className='icon'/>
                            <button className='click' >Random</button>
                    </div>
                </Link>
                <Link to='/filters' className="button">
                    <div>  
                        <h2>Search for a Recipe</h2>
                        <img src='find_recipe.png' className='icon'/>
                            <button className='click'>Search</button>
                    </div>
                </Link>  
            </div>          
        </div>
    )
}



export default Buttons
