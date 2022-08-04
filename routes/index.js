const express = require('express');
const router = express.Router();

//config route
router.get('/', function(req, res, next){
    res.send('testing index api')
})

module.exports = router