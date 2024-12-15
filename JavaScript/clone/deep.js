/**
 * 深拷贝，是引用类型存储内存的拷贝（深度遍历）
 * 方法：
 * 1、JSON.parse(JSON.stringify(obj))
 * 2、循环递归
 */

// 例1，JSON.parse(JSON.stringify(obj))，弊端：会忽略undefined、symbol和函数
const obj = {
    name: 'A',
    name1: undefined,
    name3: function () { },
    name4: Symbol('A')
}
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2); // {name: "A"}

// 例2，循环递归
function deepClone(obj) {
    let newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = typeof obj[prop] === 'object' ? deepClone(obj[prop]) : obj[prop];
        }
    }
    return newObj;
}
