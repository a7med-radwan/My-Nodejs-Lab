
// const math = require('./my_modules/math/math.js');

// هاي تلقائي هتستدعي ال index.js
const math = require('./my_modules/math');

const sum = require('./my_modules/math/sum.js');


console.log('5 + 5 = ', math.sum(5, 5));
console.log('5 + 5 = ', sum(5, 5));
