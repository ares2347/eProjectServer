//database config
const mysql = require("mysql");
const conn = mysql.createConnection({
    host:"db4free.net",
    port:3306,
    user: "hoangtu2347",
    password:"23479034",
    database: "eproject123",
    multipleStatements: true
});

module.exports = conn