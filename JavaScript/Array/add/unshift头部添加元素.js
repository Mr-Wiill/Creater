/* 
    unshift（）
    向数组的起始处添加一个或多个元素,并返回新的长度（改变原数组）。  
*/

const arr = [3,4,4,5,4,6,5,7];
const a = arr.unshift(8);
console.log(a); // 9(a为返回的数组的新长度)
console.log(arr); // [8, 3, 4, 4, 5, 4, 6, 5, 7]


