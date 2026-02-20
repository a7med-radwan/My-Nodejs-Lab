// من ال fs فقط استدعيت ال readFile
const {readFile} = require('fs');
const {promisify} = require('util');

// ال (err,data) تعتبر callback
// readFile('./../data/products.json',(err,data) => {
//     if (err){
//         console.log(err.message);
//         return;
//     }
//     console.log(data)
// })

const pReadFile = promisify(readFile);

pReadFile('./../data/products.json','utf8')
    .then(data => {
        console.log(data);
    })
.catch(err => {
    console.log(err.message);
})
//الفكؤة من هاد الكود اني حولت ميثود جاهزة ل promisify