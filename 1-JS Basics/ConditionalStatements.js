const num = 50;

if (num == 50) {
    console.log('equaled');
} else if (num > 50) {
    console.log('greater');
}else{
    console.log('less');
}

// ==  بتقارن فقط على القيمة
if (num == "50") {
    console.log('equality');
}
// بتقارن على القيمة والنوع
if (num === "50") {
    console.log('identical equality');
}