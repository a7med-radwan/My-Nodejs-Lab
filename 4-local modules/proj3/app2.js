const math = require('./my_modules/math');
console.log('5 + 5 = ', math.sum(5, 5));
console.log('5 + 5 = ', math.multiply(5, 5));
console.log('5 / 5 = ', math.divisionOps.division(5, 5));
console.log('5 / 5 = ', math.div(5, 5));
console.log('5 / 5 = ', math.reminder(5, 5));



//  اعملت import ل  sum من index
const {sum} = require('./my_modules/math');
//  اعملت import ل  multiply من index
const {multiply} = require('./my_modules/math');
// ممكن اختصرهم بهاد السطر
// const {sum,multiply} = require('./my_modules/math');
// {بنحط بين القوس ال key الموجود بالاوبجكت فال index}
console.log('5 + 5 = ', sum(5, 5));
console.log('5 * 5 = ', multiply(5, 5));

