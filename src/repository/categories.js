module.exports = {
    categoryFilter: (data) => {
        const items= data.items? data.items: 30;
        const categoryFilter =data.category? `and category like '${data.category}'` : '';
        const genderFilter = data.gender?  `and gender like '${data.gender}'`: '';
        const priceFilter = data.price? `and price ${data.price}`: '';
        const brandFilter = data.brand? `and brand like '${data.brand}'`: '';
        const nameFilter = data.name? `and name like '%${data.name}%'`: '';
        console.log(`select * from products where (true) ${categoryFilter} ${genderFilter} ${brandFilter} ${nameFilter} ${priceFilter} limit ${items}`)
        return (`select * from products where (true) ${categoryFilter} ${genderFilter} ${brandFilter} ${nameFilter} ${priceFilter} limit ${items}`)
    }
}