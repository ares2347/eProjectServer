const {response} = require("express");
const repo = require('../repository/categories')
const conn = require("../conn");
//product controller config
module.exports = {
    getCategory: (req, res) => {
        //req query require the number of items (items) and at least one of the following:
        //--gender(male, female, unisex)
        //--price(asc or dsc)
        //--brand
        //--name (search)
        const data = req.query;
        conn.query(repo.categoryFilter(data),(err, response) => {
            const resData = response;
            res.json(resData)
        })
    },
    // search: (req, res)
}