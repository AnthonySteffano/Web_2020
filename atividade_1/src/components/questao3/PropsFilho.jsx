import React from 'react'

export default (props)=>{
    return(
        <div>
            <h2>{props.nome}</h2>
            <h2>{props.curso}</h2>
            <h2>{props.cidade}</h2>
        </div>
    )
}