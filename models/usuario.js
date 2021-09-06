const connection = require("../config/database");

class Usuario {
    constructor(nome, email, password) {
        this.nome = nome;
        this.email = email;
        this.password = password;
    };

        //PROCURAR/VERIFICAR EMAIL 
        static searchEmail(email) {
            return connection.query
            ('SELECT * FROM `usuarios` WHERE `email` = ?', [email])
        }

        //CRIAR USUÁRIO
        static createUser(Usuario) {
            return connection.query
            ('INSERT INTO usuarios (nome, email, password) VALUES ("?", "?", "?")', [Usuario.nome, Usuario.email, Usuario.password]),
            console.log("Usuário criado com sucesso")
        };

        //LER TODOS OS USUÁRIOS CADASTRADOS
        static readUser() {
            return connection.query
            ('SELECT * FROM usuarios');
        };

        //ATUALIZAR USUÁRIO CADASTRADO
        static updateUser() {};

        //DELETAR USUÁRIO CADASTRADO
        static deleteUser(Usuario) {
            return connection.query
            ('DELETE FROM usuarios WHERE email "?"', [Usuario.email]),
            console.log("Usuário removido com sucesso")
        };

};

module.exports = Usuario;