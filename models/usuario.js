const app = require("express");
const connection = require("../config/database");

class Usuario {
    constructor(nome, email, newemail, password) {
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.newemail = newemail;
    };

        //CRIAR USUÁRIO
        static createUser(Usuario) {
            return connection.query
            ('INSERT INTO usuarios (nome, email, password) VALUES ("?", "?", "?")', [Usuario.nome, Usuario.email, Usuario.password]),
            console.log("Usuário criado com sucesso");
        };
        

        //ATUALIZAR USUÁRIO CADASTRADO
        static updateUser(Usuario) {
            return connection.query
            ('UPDATE usuarios SET nome = ?, email = ?, password = ? WHERE email = ?', [Usuario.nome, Usuario.newemail, Usuario.password, Usuario.email]),
            console.log("Conta atualizada com sucesso")
        };

        //DELETAR USUÁRIO CADASTRADO
        static deleteUser(Usuario) {
            return connection.query
            ('DELETE FROM usuarios WHERE email = ?', Usuario),
            console.log("Usuário removido com sucesso")
        };

};

module.exports = Usuario;