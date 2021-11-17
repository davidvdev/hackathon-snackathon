import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = (props) => {
    return ( 
    <div>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="food.jpg" />
        <Card.Body>
            <Card.Title>Salad Platter</Card.Title>
            <Card.Text>
                Make Yum recipes for any occasion
            </Card.Text>
            <Button variant="danger">CLICK The Recipe Here</Button>
        </Card.Body>
        </Card>
        
    </div>

    )
}
export default MyCard
