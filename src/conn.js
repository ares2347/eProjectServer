//database config
const mysql = require("mysql");
const conn = mysql.createConnection({
    host:"localhost",
    port:"3307",
    user: "root",
    password:"",
    database: "eProject",
    multipleStatements: true
});

module.exports = conn