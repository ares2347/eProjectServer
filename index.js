const express = require("express");

//import route
const indexRoute= require('./src/routes/index')

const app= express();

//port config
const port = process.env.PORT | 8001;

//host
app.listen(port);

//view engine
app.set("view engine","ejs");

//access static file
app.use(express.static("public"));

app.use(express.json())
// access routes config
app.use('/',indexRoute)