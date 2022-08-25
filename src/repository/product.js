module.exports = {
    productFilter: (data) => {
        return (`select * from posts where pid like '${data.pid}'; select * from products where pid like '${data.pid}'`)
    }
}