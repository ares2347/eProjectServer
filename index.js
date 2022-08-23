const express = require("express");
const cors = require('cors')
//import route
const userRoute= require('./src/routes/user')
const productRoute = require('./src/routes/product')

const app= express();

//allow cors
app.use(cors())
//port config
const port = process.env.PORT | 8002;

//host
app.listen(port);

//view engine
app.set("view engine","ejs");

//access static file
app.use(express.static("public"));
app.use(express.json())

// access routes config
app.use('/user',userRoute)
app.use('/product',productRoute)