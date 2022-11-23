/* 
判断当前对象是否为另一个对象的原型。 语法：Object.prototype.isPrototypeOf(targetObj)
*/

const arr = [];

Array.prototype.isPrototypeOf(arr); // true

// 修改obj的原型
Object.setPrototypeOf(arr, String.prototype);
Array.prototype.isPrototypeOf(arr); // false
String.prototype.isPrototypeOf(arr); // true
