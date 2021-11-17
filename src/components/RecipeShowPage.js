import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";

export default function RecipeShowPage(props) {
  const ingredientsListMap = props.recipe.recipeingredientquantities.map(
    (elem, idx) => (
      <h5>
        {elem} {props.recipe.recipeingredientparts[idx]}
      </h5>
    )
  );
  const instructionsMapped = props.recipe.recipeinstructions.map((elem) => (
    <h5>{elem}</h5>
  ));
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

        <h3 className="text-center">icons here</h3>
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
      {/* <Container className="d-flex flex-column bg-dark">
        <Container className="d-flex flex-column align-items-center">
          <Card style={{ width: "25rem", background: "red" }} className="mb-5">
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"
            />
            <Card.Body className="mx-auto">
              <Card.Title>Food Name Here</Card.Title>
              <Card.Text>Food Description Here</Card.Text>
              <Button variant="primary">See Entire Recipe!</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem", background: "red" }} className="">
            <Card.Body className="mx-auto">
              <Card.Title className="text-center">No? Try Again!</Card.Title>
              <Button variant="primary">Surprise Me!</Button>
            </Card.Body>
          </Card>
        </Container>
      </Container> */}
    </>
  );
}
