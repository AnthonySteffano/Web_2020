import React from 'react'

export default function Arena(props){
    return (
        <div>
           {React.Children.map(props.children, arena=>{
               return React.cloneElement(arena, {...props})
           })}
            
        </div>
    )
}