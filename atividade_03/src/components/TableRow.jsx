import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina.id}
                </td>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-primary">Editar</button>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}