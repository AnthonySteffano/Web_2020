import React, { Component } from 'react'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () =>(
    <FirebaseContext.Consumer>
    { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

//ListPage

 class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }
       // this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }

    componentDidMount() {
        this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
    }

    alimentarDisciplinas(query){
        let disciplinas = []
        query.forEach(
            (doc)=>{
                const {nome,curso,capacidade} = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )//push

            }//doc
        )//forEach
        this.setState({disciplinas})
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

    // apagarElementoPorId(id){
    //     let tempDisciplina = this.setState.disciplinas
    //     for(let i=0;i<tempDisciplina.length;i++){
    //         if(tempDisciplina[i]._id === id){
    //             tempDisciplina.splice(i,1)
    //         }
    //     }
    //     this.setState({disciplinas:tempDisciplina})
    // }


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