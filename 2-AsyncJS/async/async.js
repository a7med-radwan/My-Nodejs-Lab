/**
 * 2 types of operations: blocking vs non-blocking
 * 2 exec: sync and async (background)
 */


console.log(1);
console.log(2);

// async process
/**
 * async maybe: timer, long-time process, and I/O operations (files, DB, API's), async
 */
const print=()=>{
    console.log('action fired');
}

// وهاي بتاخد ميثزد والوقت بالملي ثانية
// 1000ms = 1ثانية
setTimeout(print, 1000);

console.log(3);
console.log(4)