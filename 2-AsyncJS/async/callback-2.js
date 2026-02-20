const products = require('./../data/products.json');
const stores = require('./../data/stores.json');
const cities = require('./../data/cities.json');

// async
const getProductByName = (name,cb) => {
    setTimeout(()=> {
        const product =products.find((product) => product.name === name);

    // زي جاسوس هيروح على async ويحفظ المنتج
        cb(product)
    //  وظيفتها بس تمسك المنتج وتمررو للhandleGetProductByName
    },500)
}

//callback
const handleGetProductByName = (product) => {
    console.log('product is ',product);
}
getProductByName('Tea Ahmad',handleGetProductByName);
// فعليا بعد هاي الحركة الcb = handleGetProductByName


// async store
const getStoreById = (id,cb) => {
    setTimeout(()=> {
        const store = stores.find(store => store.id === id);
        cb(store)
    },500)
}
//callback store
const handleGetStoreById = (store) => {
    console.log('store is ',store);
}
getStoreById(1,handleGetStoreById);


// async city
const getCityByName=(name,cb)=>{
    setTimeout(()=> {
        const city = cities.find(city=>city.name === name);
        cb(city)
    },500);
}
//callback city
const handleGetCityByName = (city)=>{
    console.log('city is ',city);
}
getCityByName('Gaza',handleGetCityByName);
