import React from 'react'

export default function Enemy(props){
    return(
        <div>
            <h1>Arena: {props.arena}</h1>
            <h2>Enemy: {props.name}</h2>
            <img src={props.img}/>
        </div>
    )
}