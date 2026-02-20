const { pbkdf2 } = require('crypto')

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}
//V8 = SYNC
//LIBUV = ASYNC  => 4 thread
hash();
hash();
hash();
hash();
//  امكاهاي هتتاخر لانو هتتنفذ ف libuv (async) بس بحتوي ع 4 اماكن فا هتستنى الاربعة اللي قبلها
hash();
