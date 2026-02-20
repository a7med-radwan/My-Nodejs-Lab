const joi = require('@hapi/joi')

const schema = joi.object({
    _book_id: joi.string().required(),
    _reviewer_id: joi.string().required(),
    comment: joi.string().required(),
    rating: joi.number().required()
})

module.exports = schema