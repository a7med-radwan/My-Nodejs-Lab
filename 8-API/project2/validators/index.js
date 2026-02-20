const {schema, loginSchema } = require('./user')
const reviewSchema = require('./review')

module.exports = {
    userValidator: schema,
    loginValidator: loginSchema,
    reviewValidator: reviewSchema
}