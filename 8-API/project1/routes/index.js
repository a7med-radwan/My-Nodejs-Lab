const studentRouter = require('./student')

module.exports = (app) => {
    app.get('/home', (req, res, next) => {
        res.send('<h1>Welcome to the home page</h1>')
    })
    app.get('/', (req, res, next) => {
        res.send('<h1>Welcome to the home page</h1>')
        res.redirect('/home')
    })
    app.get('/courses', (req, res, next) =>{
        console.log(req.query);
        const lang = req.query.lang;
        console.log('Lang is',lang);

        console.log(req.headers)
        const host = req.headers.host
        console.log('Host is ', host)
        console.log('Host is ', req.get('Host'))

        res.status(200).json([
            {'name': 'java','credit': 3},
            {'name': 'web','credit': 2}

        ])
    })

    app.get('/courses/all', (req, res, next) => {
        const courses = [
            {id: 5, name: 'Java', credit: 3},
            {id: 7, name: 'Web', credit: 4},
        ]
        res.status(200).json(courses);
    })

    app.get('/courses/:id', (req, res, next) => {
        const courses = [
            {id: 5, name: 'Java', credit: 3},
            {id: 7, name: 'Web', credit: 4},
        ]
        const id = req.params.id;
        const course = courses.find(course => course.id == id);
        res.status(200).json(course);
    })

    app.get('/users/:id/posts/:postId', (req, res, next) => {
        console.log(req.params.id);
        console.log(req.params.postId);
    })

//     routes group = Router
    app.use('/student', studentRouter)
}