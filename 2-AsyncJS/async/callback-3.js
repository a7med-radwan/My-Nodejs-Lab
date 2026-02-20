const products = require('./../data/products.json');
const stores = require('./../data/stores.json');
const cities = require('./../data/cities.json');

const getProductByName = (name,cb) => {
    setTimeout(()=> {
        const product =products.find((product) => product.name === name);
        if (product) {
            cb(undefined,product);
        }else {
            err={message:'product not found'};
            cb(err,null);
        }
    },500)
}
const getStoreById = (id,cb) => {
    setTimeout(()=> {
        const store = stores.find(store => store.id === id);
        if (store) {
            cb(undefined,store)
        }else {
            err={message:'store not found'};
            cb(err,null);
        }
    },500)
}
const getCityByName=(name,cb)=>{
    setTimeout(()=> {
        const city = cities.find(city=>city.name === name);
        if (city) {
            cb(undefined,city)
        }else {
            err={message:'store city found'};
            cb(err,null);
        }
    },500);
}

testProductName = 'Tea Ahmad';
//هلقيت بدي اجيب ال stor و ال city تبع المنتج Tea Ahmed
//من الاسم هجيب المنتج
// ملاحظة خلينا ال cb ياخد 2 براميتر عشان بس نعالج الايرور لو صار
getProductByName(testProductName,(err,product)=>{
    if(err){
        console.log("error is ",err.message);
    }else {
        console.log('product is ',product);
        // من بيانات المنتج مسكت الستور
        const storeId = product.store_id;
        // هان هجيب الستور
        getStoreById(storeId,(err,store)=>{
            if(err){
                console.log("error is ",err.message);
            }else {
                console.log('store is ',store);
                // ومن بيانات المتجر جبت المدينة
                const cityName=store.city;
                // من اسم المدينة هنجيب بيانات المدينة
                getCityByName(cityName,(err,state)=>{
                    if(err){
                        console.log("error is ",err.message);
                    }else {
                        console.log('city is ',state);
                        console.log('The state name of tha store is',state.name);
                    }

                })

            }
        })

    }

});