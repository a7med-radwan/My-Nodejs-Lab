const { dbConnection } = require('../configurations')
const { ObjectId } = require('bson')
const createError = require('http-errors');

const getBooks = (req, res, next) => {
    const pageNum = parseInt(req.query.page) ;
    if (isNaN(pageNum)) {
        const error = createError(404, 'You should send a page number')
        next(error);
    }

    const limit = 10;
    const skip = (pageNum - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).limit(limit).skip(skip).toArray();
        // res.json(books);
        return returnJson(res, 200, true, "", books)

    })
}

const getBooksPageCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const limit = 10;
        const count = await collection.count({})
        const pages = Math.ceil(count / limit) ;

        res.json({
            pages : pages
        });
    })
}

const getBookById = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)){
        const error = createError(400, 'Id is nor valid')
        next(error);
    }
    const _id = new ObjectId(req.params.id);
    dbConnection('books', async (collection) => {
        try{
        const book = await collection.findOne({_id})
        if (!book) {
            const error = createError(404, 'Book not found')
            next(error);

        }
        res.json(book);
        }catch(err){
            const error = createError(500, err.message)
            next(error);
        }
    })
}

module.exports = {
    getBooks, getBooksPageCount, getBookById
}