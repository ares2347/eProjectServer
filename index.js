const express = require("express");
const mysql = require("mysql");

const app= express();

//port config
const port = process.env.PORT | 8000;

//host
app.listen(port);

//view engine
app.set("view engine","ejs");

//access static file
app.use(express.static("public"));

///database config
const conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user: "root",
    password:"",
    database: "",
    multipleStatements: true
});