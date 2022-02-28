/* 
    new Set（） 
    用来对数组进行去重。
*/

const arr = [3,4,4,5,4,6,5,7];
console.log(new Set(arr)); // {3,4,5,6,7}
const a = Array.from(new Set(arr)) // [3, 4, 5, 6, 7]
const b = [...new Set(arr)] // [3, 4, 5, 6, 7]
