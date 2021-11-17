import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";

export default function RandomRecipeCard() {
  return (
    <>
      <Container className="d-flex flex-column bg-light">
        <h1 className="text-center">Dish Name Here</h1>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Image
              src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408"
              fluid
              rounded
            ></Image>
          </Col>
          <Col></Col>
        </Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>

        <h3 className="text-center">icons here</h3>
        <h3 className="text-center">
          Ready in: XYZ Minutes Serves: XYZ people
        </h3>
        <h3>Ingredients</h3>
        <h4>Ingredients here</h4>
        <br />
        <h3>Direction</h3>
        <h4>Directions Here</h4>
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
