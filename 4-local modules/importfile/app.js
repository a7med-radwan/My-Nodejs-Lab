const product = require('./data/products.json');
//هاد يعتبر import ل file يعني هتعمل نسخ لكل محتويات اللف وتحطها باسم المتغير product

const dbConfig = require('./config/database');
// الفكرة هان انو قدرت اتعامل مع data ك module
console.log(dbConfig.host);