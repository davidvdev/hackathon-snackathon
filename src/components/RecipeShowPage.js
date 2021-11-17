import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";

export default function RecipeShowPage(props) {

  const ingredientsListMap = props.recipe.recipeingredientquantities ? props.recipe.recipeingredientquantities.map(
    (elem, idx) => (
      <h5>
        {elem} {props.recipe.recipeingredientparts[idx]}
      </h5>
    )
  ) : "";
  const instructionsMapped = props.recipe.recipeinstructions ? props.recipe.recipeinstructions.map((elem) => (
    <h5>{elem}</h5>
  )) : ""; console.log(props.recipe) 
    const arrays = []
    if (props.recipe.thanksgiving === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../thanksgiving.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.christmas === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../christmas.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.nye === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../new_year.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.lunch === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../lunch.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.dinner === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../dinner.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.breakfast === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../breakfast.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.dessert === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../dessert.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.thanksgiving === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../thanksgiving.png'
          fluid
          rounded
        ></img>
      )
    if (props.recipe.thanksgiving === 1)
      arrays.push(        
        <img className='icon d-inline'
          src='../../thanksgiving.png'
          fluid
          rounded
        ></img>
      )

    
  return (
    <>
      <Container className="d-flex flex-column bg-light">
        <h1 className="text-center">{props.recipe.name}</h1>
        <Image
          className="mx-auto"
          src={props.recipe.images}
          fluid
          rounded
        ></Image>

        <div>{arrays}</div>
        <h3 className="text-center">
          Ready in:{" "}
          {props.recipe.totalminutes
            ? props.recipe.totalhours + ":" + props.recipe.totalminutes
            : props.recipe.totalhours}{" "}
          Serves: {props.recipe.recipeservings}
        </h3>
        <h3>Ingredients</h3>
        {ingredientsListMap}
        <br />
        <h3>Direction</h3>
        {instructionsMapped}
      </Container>
    </>
  );
}
