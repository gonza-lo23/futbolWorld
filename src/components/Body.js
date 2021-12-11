import React from 'react'
import  '../styles/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


const Body = () => {
    return (
        <div className='image'>
           

          <Card style={{ color: "#000"}}> 
            <Card.Img/>
            <Card.Body>
            <Card.Title>
                hola
            </Card.Title>
            <Card.Text>
                asdijasdjiasjdiajd
            </Card.Text>
            <Button variant="primary">Read more</Button>

            </Card.Body>

            </Card>
        </div>
    );
};

export default Body;
