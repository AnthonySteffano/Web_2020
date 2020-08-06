import React, { Component } from 'react'

export default class Create extends Component{

    constructor(props){
        super(props)
        this.state = {nome:'', curso: '' ,ira:''}
        // this.state = {curso:''}
        // this.state = {ira:''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    setCurso(e){
        this.setState({curso:e.target.value})
    }

    setIra(e){
        this.setState({ira:e.target.value})
    }
    //e de evento
    onSubmit(e){
        e.preventDefault()//impede que o browser faça o reload, perdendo assim a informação
        console.log('Nome:'+this.state.nome+ ' Curso: '+this.state.curso+' IRA: '+this.state.ira)
        this.setState({nome:'', curso: '' ,ira:''})
    }


    render(){
        return(
            <div style={{marginTop:10}}>
               {/* <h2>{this.state.nome}</h2>
               <h2>{this.state.curso}</h2> 
               <h2>{this.state.ira}</h2> 
  */}
                <h3>Criar Estudante</h3>

                {/* o botão precisa ser submit para acontecer essa ação */}

                <form onSubmit={this.onSubmit}> 
                    <div className='form-group'>
                        <label>Nome:</label>
                        <input type='text' className='form-control' value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className='form-group'>
                        <label>Curso:</label>
                        <input type='text' className='form-control'value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className='form-group'>
                        <label>IRA:</label>
                        <input type='text' className='form-control' value={this.state.ira} onChange={this.setIra}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Criar Estudante' className='btn btn-success'/>
                    </div>
                </form>
            </div>
        )
    }
}