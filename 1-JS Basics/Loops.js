const arr = ['BMW', 'MB', 'Nisan'];

// تعريف الطول بقيمة ثابتة افضل من وضعه بالشرط مباشرة لانو بالشرط مباشرة فكل مرة لوب هيجيب الطول ويفصح تاني
const len = arr.length;
for (i = 0 ; i < len ; i++) {
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
})