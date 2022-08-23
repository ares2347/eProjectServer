const conn = require('../conn')
const repo = require('../repository/user')
//user controller config
module.exports = {
    login: (req, res) => {
        const data=req.body;
        conn.query(repo.login(data), (err, response) => {
            const resData = response[0];
            if (err) res.send('err')
            else if (data.password===resData.password) res.json(response)
            else res.send('Incorrect username or password')
        })
    },
    register: (req, res) => {
        const data= req.body;
         conn.query(repo.register(data), (err, response)=> {
            const resData = response[0];
            if (err) res.send('err')
            else res.send(resData)
        })
    }
}