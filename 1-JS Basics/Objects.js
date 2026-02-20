// define an object
const car = {
    brand: "BMW",
    model: "X5",
    year: 2016
};

// add field to object
car.price = 547154;
car['country'] = 'Germany';
car.info = ['Speed','Strong','Red Color'];

console.log(car);
console.log(car.brand);
console.log(car['brand']);

//////////////////
// هان مصفوفة داخلها 2 اوبجكت
const cars = [
    {
        brand: 'Nissan',
        model: 'Micra',
        year: 2019
    },
    {
        brand: 'MB',
        model: 'S-Class',
        year: 2020
    }
];
//  الافضل نستخدك النقطة للاوبجكت والقوسين للمصفوفات
console.log(cars[1].brand);
console.log(cars[1]['brand']);