require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'bd977740be8ff9',
    password:'b783d166',
    database:'heroku_b0ff26a1dd377f1',
    connectionLimit:10,
    waitForConnections:true,
    dateStrings: true
})

module.exports = pool.promise();