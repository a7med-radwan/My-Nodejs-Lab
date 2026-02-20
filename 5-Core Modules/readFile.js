const {readFile, readFileSync} = require('fs')

readFile('./data/story.txt','utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log('async', data)
})

const content = readFileSync('./data/story.txt','utf8')
console.log('sync',content)