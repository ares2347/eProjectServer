module.exports = {
    login: (data) => {
        return (`select username, password from accounts where username like '${data.username}'`)
    },
    register: (data) => {
        return(
        `insert into customers values('${data.cid}', '${data.name}','${data.birthday}','${data.address}','${data.gmail}','${data.phonenumber}');`+`
            insert into accounts values('${data.username}','${data.password}','${data.cid}')`);
    }
}