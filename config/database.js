const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b397a4877ace70',
  password : '177d791d',
  database : 'heroku_dd8e73f11e025d4'
})

module.exports = connection;