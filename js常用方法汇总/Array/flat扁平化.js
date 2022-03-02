/* 
flat()
简写为flat()，接收一个数组，无论这个数组里嵌套了多少个数组，flat最后都会把其变成一个一维数组(扁平化)。
Infinity不限层级
*/

const arr = [[1,2,3],[4,5,[6,7]]];
const a = arr.flat(3);
const b = arr.flat(Infinity);
console.log(a); // [1, 2, 3, 4, 5, 6, 7]
console.log(b); // [1, 2, 3, 4, 5, 6, 7]

