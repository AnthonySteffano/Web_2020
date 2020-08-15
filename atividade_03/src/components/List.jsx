import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { discplinas: [] }

    }

    componentDidMount() {
        axios.get('http://localhost:3001/disciplina')
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
                return <TableRow disciplina={dis} key={i} />;
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