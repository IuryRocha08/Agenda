'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USER || 'iury',
  password : process.env.MYSQL_PASSWORD || '123',
  database : process.env.MYSQL_DATABASE || 'contatos'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;