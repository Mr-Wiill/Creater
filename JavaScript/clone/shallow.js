/**
 * 浅拷贝：浅拷贝是引用地址的拷贝（只拷贝第一层数据）
 * 背景：引用类型数据保存在堆内存中，引用地址存在栈中
 * 原理：创建一个新的对象，将原对象的引用地址复制到新对象中
 * 方法：
 * 1、一层for循环拷贝；
 * 2、Object.assign；
 * 3、Object.create；
 * 4、Array.prototype.slice()；
 * 5、Array.prototype.concat()；
 * 6、使用拓展运算符实现的复制。
 */

// 例1 for循环拷贝
function shallowClone(obj) {
    const newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

// 例2 Object.assign拷贝
var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}
var newObj = Object.assign({}, fxObj);


// 例3 Object.create拷贝
var newObj = Object.create(obj);


// 例4 Array.prototype.slice拷贝
var arr = [1, 2, 3];
var arr1 = arr.slice(0);


// 例5 Array.prototype.concat拷贝
var arr2 = arr.concat();


// 例6 使用拓展运算符实现的复制
var arr3 = [...arr];