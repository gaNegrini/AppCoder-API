const express = require('express');
const connection = require('./config/database');
const routes = require('./routes/router');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Acess-Control-Allow-Methods', "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});
app.use(cors({
    origin: '*'
}))

app.use(routes);


const PORT = 8080;
app.listen(PORT, () => {
    console.log('Servidor aberto em: localhost:' + PORT);
});
