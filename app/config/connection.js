// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
// var mysql = require('mysql');
var Sequelize = require('sequelize')
// var connection;
// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//   connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"cali",
//     database: "caballus"
//   });
// };
// connection.connect();
// module.exports = connection;

// Creates mySQL connection using Sequelize

var sequelize = new Sequelize("caballus", "root", "cali", {
  host: "localhost",
  // port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
