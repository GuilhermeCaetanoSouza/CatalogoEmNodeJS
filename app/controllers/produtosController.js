const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'livraria',
    user: 'root',
    password: ''
});

module.exports = {
    listar: (callback) => {
        connection.query('SELECT * FROM produtos', callback);
    },
    
    criar: (produto, callback) => {
        connection.query('INSERT INTO produtos SET ?', produto, callback);
    }
};