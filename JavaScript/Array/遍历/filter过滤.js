/* 
filter（）
一个过滤方法，参数是一个函数，所有的数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。（不会改变原始数组）。

*/

const arr = [3,4,4,5,4,6,5,7];
const a = arr.filter(item => item % 3 > 1);
console.log(a); // [5, 5]
