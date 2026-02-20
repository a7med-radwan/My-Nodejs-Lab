const fs = require('fs');
// استعدعاء ال promisify
const {promisify} = require('util');

const getProductByName=(name ,cb) => {
    fs.readFile('./../data/products.json',(err,data) => {
        if (err) {
            cb(err,null);
        }else {
            const json = JSON.parse(data);
            const product = json.find(product => product.name === name);
            cb(undefined,product);
        }
    })
}
// فانكشن ال promisify بتاخد فانكشن وبتحولها ل promise وطبعا هتلغي ال callback
const findProduct = promisify(getProductByName);
findProduct('Tea Ahmad')
    // هتستقبل ال  cb(err,null);
    .then(product => {
        console.log(product);
    })
    // هتستقبل ال cb(undefined,product);
    .catch(err => {
        console.log(err);
    })
