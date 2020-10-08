import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () =>(
    <FirebaseContext.Consumer>
    { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

//ListPage

 class List extends Component {

    constructor(props) {
        super(props)
        this._isMounted = false //para saber se está montado ou não
        this.state = { disciplinas: [] }
       // this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }

    componentDidMount() {
        this._isMounted = true;
       
        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas)=>{
                if(disciplinas){
                    if(this._isMounted){
                        this.setState({disciplinas})
                    }
                }
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (dis, i) => {
                return <TableRow disciplina={dis} key={i} 
                firebase = {this.props.firebase}
                />
            }
        )
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Disciplinas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <th>ID</th>
                        <th>Nome da disciplina</th>
                        <th>Curso</th>
                        <th>Capacidade</th>
                        <th colSpan="2" style={{textAlign:"center"}}> </th>
                        
                    </thead>

                    <tbody>
                        {this.montarTabela()}
                    </tbody>


                </table>
            </div>
        )
    }
}

export default ListPage