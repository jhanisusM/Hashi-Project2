// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host:"jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user:"dsdqcg76ojzur9i3",
    password:"ticxtzc73azmzf0j",
    database: "jh5djgfpix1fvnkf"
  });
};
connection.connect();
module.exports = connection;

// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("caballus", "root", "cali", {
//   host: "localhost",
//   // port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;
