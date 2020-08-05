import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'

export default function Enemy(props){
    return(
        <Card style ={{ width: '18rem'}}>
        <Card.Img variant = "top" src={props.img}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Vilão da saga</Card.Text>
            <Button target='_blank' href="https://pt.wikipedia.org/wiki/Darth_Vader" variant="primary">Fonte</Button>
        </Card.Body>
    </Card>
    )
}

        // <div>
        //     <h1>Enemy: {props.name}</h1>
        //     <img src={props.img}/>
        // </div>

     