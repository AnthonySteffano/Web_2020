import React from 'react'

export default function Hero(props){
    return(
        <div>
            <h1>Hero: {props.name}</h1>
            <img src={props.img}/>
        </div>
    )
}