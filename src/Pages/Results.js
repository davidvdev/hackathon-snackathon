import React from 'react'
//import Navbar from 'Components/Navbar.js'

const Results = (props) => {
    return ( 
    <div>
        {/* <Navbar/>  */}
        <img src={props.results.img} /> 
        <h1>{props.results.name}</h1>
        //filter choices
        <h2>Ingredients</h2>
        <div className='recepie'>
            <ul>
            {props.results.ingredients.map((item, index) => {
              
              return (
                  
                      <li>{item}</li> 
                      
                 )
              
           })}
          </ul>
        </div>

        <h2>Directions</h2>

        <div className=''>
            <ul>
            {props.results.directions.map((item, index) => {
              
              return (
                  
                      <li>{item}</li> 
                      
                 )
              
           })}
          </ul>
        </div>



    </div>

    )
}
export default Results