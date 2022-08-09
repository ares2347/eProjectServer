const conn = require('../conn')
module.exports = {
    login: (req, res) => {
        const data=req.body;
        const sql = `select username, password from accounts where username like '${data.username}'`
        conn.query(sql, (err, response) => {
            const resData = response[0];
            if (err) throw err
            else if (data.password===resData.password) res.json(response)
            else res.send('Incorrect username or password')
        })
    },
    register: (req, res) => {
        const data=req.body;
        const sql = `insert into customers values('${data.cid}', '${data.name}','${data.birthday}','${data.address}','${data.gmail}','${data.phonenumber}'); insert into accounts values('${data.username}','${data.password}','${data.cid}')`;
        conn.query(sql, (err, response)=> {
            const resData = response[0];
            if (err) throw err
            else res.send(resData)
        })
    }
}