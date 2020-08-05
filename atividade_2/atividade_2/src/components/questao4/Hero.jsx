import React from 'react'

export default function Hero(props){
    return(
        <div>
            <h1>Arena:{props.arena}</h1>
            <h2>Hero: {props.name}</h2>
            <img src={props.img}/>
        </div>
    )
}