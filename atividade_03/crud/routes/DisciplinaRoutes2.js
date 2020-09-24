var express = require('express')
var router = express.Router()
var DisciplinaService2 = require('../services/DisciplinaService2')

router.get('/list',function(req,res,next){
    DisciplinaService2.list(req,res)
})

router.post('/register', function(req,res,next){
    DisciplinaService2.register(req,res)
}) 
router.put('/update/:id', function(req,res,next){
    DisciplinaService2.update(req,res)
})

router.delete('/delete/:id', function(req,res,next){
    DisciplinaService2.delete(req,res)
})

router.get('/retrieve/:id',function(req,res,next){
    DisciplinaService2.retrieve(req,res)
})



module.exports = router