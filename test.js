
// const fs = require('fs');
// 2) سكريبت يوضّح فرق setTimeout(0) و setImmediate بعد I/O
// fs.readFile(__filename, () => {
//   console.log('1) readFile callback');

//   setTimeout(() => console.log('2) setTimeout(0) after I/O'), 0);
//   setImmediate(() => console.log('3) setImmediate after I/O'));
// القاعدة: داخل كولباك I/O، setImmediate يسبق setTimeout(0) لأننا سنخرج من poll ونروح مباشرةً لمرحلة check قبل timers.
// });




// console.log('A) start sync');

// // Microtasks
// process.nextTick(() => console.log('B) nextTick 1'));
// Promise.resolve().then(() => console.log('C) promise then 1'));
// queueMicrotask(() => console.log('D) queueMicrotask 1'));
// process.nextTick(() => {
//   console.log('E) nextTick 2');
//   Promise.resolve().then(() => console.log('F) promise then داخل nextTick'));
// });

// // Macrotasks
// setTimeout(() => console.log('G) setTimeout(0)'), 0);
// setImmediate(() => console.log('H) setImmediate'));

// console.log('I) end sync');


// let count = 0;

// function spinNextTick() {
//   if (count++ < 5) {
//     process.nextTick(spinNextTick);
//   }
// }
// spinNextTick();

// setImmediate(() => console.log('setImmediate reached'));
// setTimeout(() => console.log('setTimeout reached'), 0);

// console.log('sync done');

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 0");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate");
// });

// Promise.resolve().then(() => console.log("Promise"));

// process.nextTick(() => console.log("nextTick"));

// console.log("End");


// const fs = require('fs');
// fs.readFile(__filename, () => {
//   console.log('1) readFile callback');

//   setTimeout(() => console.log('2) setTimeout(0) after I/O'), 0);
//   setImmediate(() => console.log('3) setImmediate after I/O'));
// });


// const fs = require("fs");

// // 1) Timer → Macrotask
// setTimeout(() => {
//     console.log("Timer Callback (setTimeout)");
// }, 0);

// // 2) Microtask Queue → Promise then()
// Promise.resolve().then(() => {
//     console.log("Microtask: Promise.then()");
// });

// // 3) I/O → Pending Callbacks + Poll Phase
// fs.readFile(__filename, (err, data) => {
//     if (err) {
//         console.log("Pending Callbacks: File read error");
//     } else {
//         console.log("I/O Callback: File read completed");
//     }

//     // 4) Microtask داخل I/O
//     Promise.resolve().then(() => {
//         console.log("Microtask inside I/O callback");
//     });

//     // 5) Check Phase → setImmediate
//     setImmediate(() => {
//         console.log("Check Phase: setImmediate callback");
//     });
// });

// // 6) Close Callbacks مثال (يفتح وينهي stream)
// const stream = fs.createReadStream(__filename);
// stream.on("close", () => {
//     console.log("Close Callback: Stream closed");
// });
// stream.close();
setTimeout(() => console.log('Timer 1'), 10);
setTimeout(() => console.log('Timer 2'), 20);

const start = Date.now();
while (Date.now() - start < 50) {} // CPU مشغول 50ms

console.log('Done blocking');

