import React from 'react'

export default function Enemy(props){
    return(
        <div>
            <h1>Enemy: {props.name}</h1>
            <img src={props.img}/>
        </div>
    )
}