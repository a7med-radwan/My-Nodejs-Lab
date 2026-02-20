const http = require('http')
const port =5050;


/**
 * simulate an error
 * and stop the process
 */

const someError =true
// الprocess.exit(0) يعني انهي العملية اما لو اي رقم غير ال0 يعني انهي العملية لانو في ايرور
if (!someError) {
    process.exit(1)
}


/**
 * create Node.js http server with handling multi urls
 */

const server = http.createServer((req, res) => {
    // http://localhost:5050
    switch (req.url) {
        // هينفذها لما ميكونش في اشي بعد ال 5050
        case '/':
            res.end(`
                <html>
                    <head>
                        <title>My Mapp</title>
                    </head>
                    <body>
                        <h1>Welcome to my first nodejs app </h1>
                    </body>
                </html>
                `);
            break;
        // هينفذها لما يلاقي كلمة admin بعد ال 5050

        case '/admin':
            res.end('Admin page, good morning');
            break;
        // هينفذها لما يلاقي كلمة user بعد ال 5050
        case '/user':
            res.end('User page, good morning');
            break;
        // هينفذها لما يلاقي كلمة غريبة بعد ال 5050
        default:
            res.end('Page not found!');
            break;
    }
});

/**
 * listen to requests
 */
server.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});
