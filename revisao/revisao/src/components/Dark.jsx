import React from 'react'


//criando os componentes como variáveis.

const DirtyJonas = (props) => {
return(
    <h3>Olá, eu sou o Jonas do ano {props.year}</h3>
)
}

const OldMartha = (props) => {
    return(
        <h3>Olá, eu sou a Old Martha do ano {props.year}</h3>
    )
    }

const Maria = (props) =>
<h3>Olá, eu sou a Maria do ano {props.year}</h3>

export { DirtyJonas, OldMartha, Maria }