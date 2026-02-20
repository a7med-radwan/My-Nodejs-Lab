// const story = require('./data/story.txt')
// console.log(story)

const { readFile } = require('fs')
readFile('./data/story.txt', 'utf8', (err, data) => {
    console.log(err)
    console.log(data)
})