const connection = require('../config/database');
const { createUser, deleteUser, updateUser } = require('../models/usuario');
const Usuario = require('../models/usuario');

const router = require('express').Router();

// ROTA POST CADASTRAR UM USUÁRIO
router.post('/register', (req, res) => {
    let data = req.body
    console.log(data);
    createUser(data);
    
    res.send({ message: "Conta criada com sucesso" });

});

// ROTA GET MOSTRAR TODOS OS USUÁRIOS
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        return res.json(results)
    }), console.log('GET completo')
});

//ROTA PUT ATUALIZAR DADOS USUÁRIO
router.put('/update', (req, res) => {
    let data = req.body;
    console.log(data);
    updateUser(data);

    res.send({ message: "Conta atualizada com sucesso" });
});
    
//ROTA DELETE REMOVER UM USUÁRIO
router.delete('/remove/:email', (req, res) => {
    let data = req.params.email
    console.log("Conta removida: " + data);
    deleteUser(data);

    res.send({ message: "Conta removida com sucesso"})
});

module.exports = router;
