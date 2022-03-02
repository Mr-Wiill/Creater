/* 
Object.Prototype.toString（）（推荐）
可以精准的判断对象类型。它可以判断某个对象值属于哪种内置类型。
*/

const arrs = [1,2,3];
console.log(typeof arrs) // object
console.log(Object.prototype.toString.call(arrs))  // [object Array]

