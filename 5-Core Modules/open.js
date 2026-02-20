const {open, readFile} = require('fs');

open('./data/story.txt', (err, fd) =>{
    if (err){
        console.log(err);
        return;
    }
    readFile(fd,'utf8', (err, content) =>{
        if (err){
            console.log(err);
            return;
        }
        console.log(content);
    })
})