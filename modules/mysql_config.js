require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'heroku_1982f07e8198e65',
    user:'be1e1469335d3f',
    password:'fc9d2019',
    database:'heroku_1982f07e8198e65',
    connectionLimit:10,
    waitForConnections:true,
    dateStrings: true
})

module.exports = pool.promise();