import React from 'react'
//import Character from './Character'

export default (props)=>{
    return(
        <div>
            Época: {props.time}
            {
                React.Children.map(
                    props.children,
                    (character)=>{  

                        return React.cloneElement(character,{teste:10,time:props.time})

                    }
                )
            }
        </div>
    )
}
//elemento  é uma variavel que tem dentro do children, é cada filho de time que ta passando, o operador '...props' vai copiar todas as propriedades 

                        // vamos criar um clone para cada filho, passando time como propriedade pro clone
            

// export default(props) =>{
//     return(
//     <div>
//         {props.children}
//     </div>)
// }

// export default (props) =>{
//     return(
//         <div>
//         <Character name = "Ulrich Nielsen" time="1986"/>
//         <Character name = "Mikkel Nielsen" time="2019"/>
//         <Character name = "Claudia Tiedman" time="2056"/>
//         </div>
//     )
// }