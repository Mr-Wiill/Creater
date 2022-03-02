/* 
    find（）
    返回符合传入测试（函数）条件的数组元素。
*/

const arr = [3,4,4,5,4,6,5,7];
const a = test.find(item => item > 3);
console.log(a); //4(find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。)

const b = test.find(item => item == 0);
console.log(b); //undefined(如果没有符合条件的元素返回 undefined)
