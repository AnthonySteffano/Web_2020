
import React, { Component } from 'react'

export default class PropsFilho extends Component{
    render(){
        return(
            <div>
                <h2> {this.props.nome}</h2>
                <h2> {this.props.curso}</h2>
                <h2> {this.props.cidade}</h2>
            </div>
        )
    }
}


