
/* 
判断某个属性是否可枚举。

语法： Object.prototype.propertyIsEnumerable(prop)
*/

const obj = { name: 'ecmaer'};

Object.getOwnPropertyDescriptor(obj, 'name').enumerable; // true
obj.propertyIsEnumerable('name'); // true

// 将属性name设置成不可枚举
Object.defineProperty(obj, 'name', {enumerable: false});
obj.propertyIsEnumerable('name'); // false


for(let i in obj){
    console.info(obj[i]); // 没有遍历出'ecmaer'
}
