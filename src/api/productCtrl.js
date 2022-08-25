const conn = require('../conn')
const {response} = require("express");
const repo = require('../repository/product')
//product controller config
module.exports = {
    getProduct: (req, res) =>{
        const data = req.query;
        conn.query(repo.productFilter(data), (err, response) => {
            const resData = response;
            console.log(repo.productFilter(data))
            res.json(resData)
        })
    }
    // search: (req, res)
}