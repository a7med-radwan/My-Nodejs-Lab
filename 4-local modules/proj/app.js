// استدعاء ل 2 modules كل واحد في فانكشن وحدة
const sumOp = require('./my_modules/math/sum');
const multiply = require('./my_modules/math/multiply');

console.log('sum is :'+ sumOp(5 , 5));
console.log('multiply is :'+ multiply(5 , 5));