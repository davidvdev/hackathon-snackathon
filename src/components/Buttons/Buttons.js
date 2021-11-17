import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

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
                    </>
                    }
                
        <div>
                </div>
            <button onClick={() => randomButton(props)}>Search Random Recipe</button>
            <Link to='/filters'>
                <button>Search With Filters?</button>
            </Link>
        </div>
    )
}



export default Buttons