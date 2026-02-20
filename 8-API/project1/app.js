const express = require('express')
const moddlewares = require('./middlewares');
const routes = require('./routes');


const app = express();
moddlewares(app);
routes(app);



module.exports=app