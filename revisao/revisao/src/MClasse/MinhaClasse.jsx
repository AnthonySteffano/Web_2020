import React,{Component} from 'react'


class MinhaClasse extends Component{
    render(){
        return(
            <div>
                Minha Classe: {this.props.nome}
            </div>
        )
    }
}

export default MinhaClasse