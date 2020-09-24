var mongoose = require('mongoose');

var DisciplinaSchema = mongoose.Schema({
    nome: { type: String, required: true, max: 150 },
    curso: { type: String, required: true, max: 100 },
    capacidade: { type: Number, required: true }
    
}
)
// uma tabela do banco de dados.

var DisciplinaModel2 = mongoose.model('disciplinas',DisciplinaSchema);

module.exports = DisciplinaModel2