import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { discplinas: [] }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }

    componentDidMount() {
    //    axios.get('http://localhost:3001/disciplina') //json-server
       axios.get('http://localhost:3002/disciplinas/list') //express
            .then(
                (res) => {
                    this.setState({ discplinas: res.data })
                }
            )
            .catch((error => {
                console.log(error)
            }))
    }

    montarTabela() {
        if (!this.state.discplinas) return
        return this.state.discplinas.map(
            (dis, i) => {
                return <TableRow disciplina={dis} key={i} apagarElementoPorId={this.apagarElementoPorId}  />
            }
        )
    }

    apagarElementoPorId(id){
        let tempDisciplina = this.setState.discplinas
        for(let i=0;i<tempDisciplina.length;i++){
            if(tempDisciplina[i]._id === id){
                tempDisciplina.splice(i,1)
            }
        }
        this.setState({discplinas:tempDisciplina})
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