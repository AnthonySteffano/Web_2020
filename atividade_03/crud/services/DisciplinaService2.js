const DisciplinaModel2 = require('../models/DisciplinaModel2')

class DisciplinaService2{

    static register(req,res){
        DisciplinaModel2.create(req.body)
        .then(
            (disciplina) =>{
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (error) =>{
                res.status(500).json(error)
            }
        )
    }
    static list(req,res){
        DisciplinaModel2.find()
        .then(
            (disciplinas)=>{
                res.status(201).json(disciplinas)
            }
        )
        .catch(
            (error) =>{
                res.status(500).json(error)
            }
        )
    }
    static delete(req,rees){
        DisciplinaModel2.findByIdAndRemove(req.params.id)
        .then(
            (disciplina)=>{
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (error) =>{
                res.status(500).json(error)
            }
        )
    }

    static retrieve(req,res){
        DisciplinaModel2.findById(req.params.id)
        .then(
            (disciplina)=> {
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (error) =>{
                res.status(500).json(error)
            }
        )
    }

}

 module.exports = DisciplinaService2