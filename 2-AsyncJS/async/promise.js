//read files مكتبة مشهورة
const fs = require('fs');

//async
const getProductByName = (name)=>{
    // اعملت ارجاع لاوبجكت من نوع promise
    // ال promise بياخد 2 براميتر فانكشن جاهزات
    return  new Promise((resolve,reject)=>{
        // جيت البيانات من الفايل
        // هاي بترجع البيانات كنص مش كمصفوفة
        const data = fs.readFileSync('./../data/products.json');
        // حولت النص ل json
        const json = JSON.parse(data);
        //  مسكت المنتج
        const product = json.find(product=>product.name === name);

        if(product){
            //وظيفتها ترجع البيانات ازا لقتها موجودة
            resolve(product);
        }else {
            // لو اخلفت الوعد وما رجعت بيانات فهترجع رسالة ايرور
            err={message:'sorry, products not found'};
            reject(err);
        }
    })
}
getProductByName('Tea Ahmad')
    // ال promise هيرجع 2 فانكشن
    // هاي الاولى هتستقبل من ال resolve
    .then(data => {
        console.log('profuct is',data);
    })
    // وهاي التانية هتستقبل من ال reject
    .catch(err => {
        console.log('error is',err.message);
    })

