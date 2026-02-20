module.exports = (app) => {
    app.use((req, res, next)=> {
        const lang = req.query.lang;
        if (lang && (lang == 'en' || lang == 'ar')) {
            next();
        }

        res.status(400).json({
            message: 'lang is required'
        })
    })

    app.use((req, res, next)=> {
        // some check
        next();
    })
}
