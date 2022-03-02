/* 
for in（）
跟map方法类似，遍历对象或者数组。

但值得注意的是for in 循环返回的值都是数据结构的键值名。 遍历对象返回的对象的key值,遍历数组返回的数组的下标(key)。

*/

// 对象
const obj = {a: 123, b: 12, c: 2 };
for (let a in obj) {
    console.log(a)
}
// a
   b
   c   
//数组
const arr = [3,4,4,5];
for(let a in arr) {
    console.log(a)
}
// 0
   1
   2
   3
