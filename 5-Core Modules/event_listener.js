const http = require('http')
const server = http.createServer();

// event listener (non blocking)
server.on('listening', () => {
    console.log('Server is listening now');
})
server.listen(3000)
