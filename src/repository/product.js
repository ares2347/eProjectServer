module.exports = {
    productFilter: (data) => {
        return (`select * from posts where pid like '${data.pid}'; select * from products where pid like '${data.pid}'`)
    },
    productReview: (data) => {
        return (`select * from reviews a inner join customers b on a.cid = b.cid where pid like '${data.pid}'`)
    },
    productRecommended : (data) => {
        return(`select * from products where brand like '${data.brand}' limit 5`)
    },
    productFeatured: (data) => {
        return (`select * from reviews a inner join products b on a.pid = b.pid where category like '${data.category}' order by title desc limit 3`)
    }
}