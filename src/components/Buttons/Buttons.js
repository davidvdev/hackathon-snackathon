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
            <Link to='/recipes'>
                <button>Search Random Recipe</button>
            </Link>
            <Link to='/filters'>
                <button>Search With Filters?</button>
            </Link>
        </div>
    )
}



export default Buttons
