const conn = require('../conn')
const {response} = require("express");
const repo = require('../repository/product')
//product controller config
module.exports = {
    get: (req, res) => {
        //req query require the number of items (items) and at least one of the following:
        //--gender(male, female, unisex)
        //--price(asc or dsc)
        //--brand
        //--name (search)
        const data = req.query;
        conn.query(repo.productFilter(data),(err, response) => {
            const resData = response;
            res.json(resData)
        })
    }
    // search: (req, res)
}