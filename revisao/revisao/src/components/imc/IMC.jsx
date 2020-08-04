import React from 'react'


export default (props) => {

    const imc = (peso,altura) =>{
        return calculaIMC(peso,altura)
    }

//função interna a ser usado pelo componente

    function calculaIMC(peso, altura) {
        return peso / (altura * altura)
    }
    //retorno obrigatorio do jsx de um componente React
    return (
        <div>
            Peso: {props.peso}, altura: {props.altura}<br/>
            O seu IMC é: {calculaIMC(props.peso, props.altura)}<br/>
            O segundo modo de IMC: {imc(props.peso,props.altura)}
        </div>
    )
}