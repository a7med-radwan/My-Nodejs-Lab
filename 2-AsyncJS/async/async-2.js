const products = require('./../data/products.json');

//async
const getProdutByName = (name) => {
   setTimeout(()=> {
       const product = products.find(product => product.name === name);
        return product;
   },1000)
}

// مش هيطبع اشي لانو الكود معمول بال async لانو برنامج فقط بينفذ الموجو على sync
// يعني الطباعة هتتنفذ قبل الميثود فمش هيطبع اشي
product = getProdutByName('Tea Ahmad');
console.log(product);