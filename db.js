const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TU_PASSWORD',
    database: 'test_db'
});

connection.connect(err => {
    if (err) console.error(err.message);
    else console.log('Conectado a MySQL');
});

module.exports = connection;