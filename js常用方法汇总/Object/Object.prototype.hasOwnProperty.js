
/* 
判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性,并返回一个布尔值。
语法： Object.prototype.hasOwnProperty(prop)
*/

let obj = {};// 定义一个object实例

obj.prop1 = 'value1'; // prop1是一个自有属性
obj.constructor.prototype.prop2 = 'value2'; // prop2是一个原型链属性

// 无论自有属性还是原型链属性，我们都可以访问到
console.info(obj.prop1); // value1
console.info(obj.prop2); // value2

// 使用`hasOwnProperty()`方法判断属性是否为自有属性
obj.hasOwnProperty('prop1'); // true
obj.hasOwnProperty('prop2'); // false
