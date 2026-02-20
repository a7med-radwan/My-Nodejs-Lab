const {stat} = require('fs')

stat('./opendir.js', (err, stat) =>{
    console.log(stat)
});