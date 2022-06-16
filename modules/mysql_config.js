require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'ba21e33c5e4ea7',
    password:'6c95ca35',
    database:'heroku_af5e06537276fcc',
    connectionLimit:10,
    waitForConnections:true,
    dateStrings: true
})

module.exports = pool.promise();