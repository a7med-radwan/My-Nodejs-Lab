const {open, writeFile} = require('fs');

open('./data/story.txt', 'a+', (err, fd) => {
    if (err){
        console.log(err);
        return
    }
    writeFile(fd, 'Hello new stort', (err) => {
        if (err){
            console.log(err);
        }
    })
})