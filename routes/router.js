const { createUser, searchEmail, readUser, deleteUser } = require('../models/usuario');
const { body, validationResult } = require('express-validator');

const router = require('express').Router();

router.post('/register', (req, res) => {
    let data = req.body
    createUser(data)
    
    res.send({ message: "Conta criada com sucesso" });

});

router.get('/users', (req, res) => {
    res.send(readUser()).json
})

router.delete('/remove', (req, res) => {
    let data = req.body.email
    deleteUser(data)

    res.send({ message: "Conta removida com sucesso"})
})

module.exports = router;
