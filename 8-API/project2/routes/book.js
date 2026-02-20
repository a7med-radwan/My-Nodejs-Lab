const {Router} = require('express');
const {bookController} = require('../controllers');
const {auth} = require('../middlewares');

const router = Router();

router.get('/', auth, bookController.getBooks)
    .get('/pages', bookController.getBooksPageCount)
    .get('/:id', bookController.getBookById)

module.exports = router;