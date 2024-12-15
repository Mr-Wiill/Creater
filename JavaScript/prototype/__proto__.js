/**
 * 原型和原型链
 * __proto__作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的
 */
function Person(name) {
    this.name = name;
    this.age = 18;
    this.sayName = function () {
        console.log(this.name);
    }
}
// 第二步 创建实例
var person1 = new Person('person')

/**
 * 下面分析一下：
 * 1、构造函数Person存在原型对象Person.prototype
 * 2、构造函数生成实例对象person，person的__proto__指向构造函数Person原型对象
 * 3、Person.prototype.__proto__ 指向内置对象，因为 Person.prototype 是个对象，默认是由 Object函数作为类创建的，而 Object.prototype 为内置对象
 * 4、Person.__proto__ 指向内置匿名函数 anonymous，因为 Person 是个函数对象，默认由 Function 作为类创建
 * 5、Function.prototype 和 Function.__proto__同时指向内置匿名函数 anonymous，这样原型链的终点就是 null
 */

// 实例的__proto__指向
console.log(person1.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

// 构造函数的__proto__指向
console.log(Person.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

// 实例的constructor指向
console.log(person1.constructor === Person)     // true
console.log(Person.constructor === Function)    // true
console.log(Function.constructor === Function)  // true

// Object的constructor拓展
console.log(Object.constructor === Function)    // true
console.log(Object.constructor === Function.constructor)    // true