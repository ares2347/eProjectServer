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
    },
    getReview: (req, res) => {
        const data= req.query;
        conn.query(repo.productReview(data), (err, response) => {
          const resData = response;
          console.log(repo.productReview(data))
          res.json(resData)
        })
    },
    getRecommended: (req, res) => {
        const data= req.query;
        conn.query(repo.productRecommended(data), (err, response) => {
            const resData = response;
            console.log(repo.productRecommended(data))
            res.json(resData)
        })
    },
    getFeatured: (req,res) => {
        const data = req.query;
        conn.query(repo.productFeatured(data), (err, response) => {
            const resData = response;
            console.log(repo.productFeatured(data))
            res.json(resData)
        })
    }

}