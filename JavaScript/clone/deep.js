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

// 例2，简单的循环递归，弊端：无法拷贝Date、RegExp、Function、Map、Set等对象
function deepClone1(obj) {
    let newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = typeof obj[prop] === 'object' ? deepClone1(obj[prop]) : obj[prop];
        }
    }
    return newObj;
}

// 例3，全面深拷贝，弊端：遇到对象就递归，若存在完全相同的对象（可以复用），则会浪费性能
function deepClone2(obj) {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (obj === null || typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    let cloneObj = new obj.constructor();   // 找到的是所属类原型上的constructor，而原型上的 constructor指向的是当前类本身
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone2(obj[key]);
        }
    }
    return cloneObj;
}

// 例4，全面且性能更优的深拷贝，用WeakMap来存储对象属性，如果存在完全相同的对象，则直接返回，避免不必要的递归
function deepClone3(obj, hash = new WeakMap()) {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (obj === null || typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}