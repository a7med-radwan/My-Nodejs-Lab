const { pbkdf2 } = require('crypto')
const { createServer } = require('http')

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

const lis = () => {
    createServer().listen(3000, () => {
        console.log('listening', Date.now() - start)
    })
}

// هينفذ عملية السيرفر فالبداية كاولوية في مكان جديد اسمو os
// لانو عملية السيرفر عملية كبيرة وضخمة فش حدا بقدر ينفذها غير ال os
hash();
hash();
hash();
hash();
lis();