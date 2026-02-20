//  الفكرة من ال asyncawait انو بيحافظ على شكل و هيكيلة الكود يعني بيحافظ على الستايل الطبيعي

//async
//  بلستخدام ال async ()=> حولت الفانكشن تشتغل كلها داخل ال async
const getUSData = async ()=> {

    // ميثود هتجيب كل البيانات وترجعها
    // حطيت كلمة await عشان السطر هاد non block فلازم احولو ل block
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    // فحص الكود ازا فيه ايرورو ولا لاء
    if (response.status !== 200) {
        err ={message :'cannot fetch the data'};
        console.log(err)
    }
    // حولتها ل json
    // هان حطينا await عشان ناتج التحويل ل json عاملينو بال js ك async
    // شغلة للحفظ فقط
    const json = await response.json();
    console.log(json)
}
getUSData();


// طريقة تانية لل asyncawait
const getUSData2 = async () => {
    const response2 = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    // error case
    if (response2.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const json2 = await response2.json()
    return json2;

//  ال asyncawaite لما نعمللها return هترجع object promise
}

// run
getUSData2()
    // اي اشي مرجع من الميثود ال async هتستلمو ال then
    .then(data => {
        console.log(data)
    })
    // ال catch بس هتستقبل الايرور الموجود فعليا داخل الميثةد ال async
    // فعشان هيك اعملنا ايرور ورمناه باستخدام ال throw
    .catch(err => {
        console.log(err.message)
    })
