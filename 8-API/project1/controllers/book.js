const {dbConnection} = require('../configurations')
const getBooks = (req, res, next) => {
    dbConnection('books', async cb(connection) => {
        const books = await connection.find({}).toArray();
        res.json(books);
    })
}

module.exports = {
    getBooks
}