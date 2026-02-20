// const sum = require('./sum');
// const multiply = require('./multiply');

const divisionOps = require('./division');

module.exports= {
    sum:require('./sum'),
    multiply:require('./multiply'),
    divisionOps,
    div: divisionOps.division,
    reminder : require('./division').reminder


}