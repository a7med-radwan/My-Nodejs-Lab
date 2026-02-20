const computoTax =(amount,taxPercent)=>{
    const tax = (taxPercent/100)*amount;
    return tax;
}

console.log("sync is",computoTax(400,10));

/////////////////////////

// callback
// طريقة لهندلة ال async
// بنعملها عن طريق استدعاء ميثود داخل ميثود
const cb = ()=>{
    console.log("async is",computoTax(400,10));
}
setTimeout(cb, 500);