/*

Object.prototype只是一个普通对象，它是js原型链的最顶端

Object.prototype.__proto__=== null;//true

Object.prototype.prototype === undefied;//true

Object.prototype只是一个普通对象(普通对象没有prototype属性，所以值是undefined)，Object.prototype是js原型链的最顶端，它的__proto__是null(有__proto__属性，但值是null，因为这是原型链的最顶端)。

在js中如果A对象是由B函数构造的，那么A.__proto__ === B.prototype。

javascript中对象是由Object创建的，函数是由Function创建的。

内置的Object是其实也是一个函数对象，它是由Function创建的。

Object.__proto__ === Function.prototype;

js中每一个对象或函数都有__proto__属性，但是只有函数对象才有prototype属性。

//函数对象

function Person()
{

}


// 普通对象

var obj = {};



obj.__proto__ === Object.prototype;//true

obj.prototype === undefined;//true

Person.__proto__ === Function.prototype;//true

Person.prototype !== undefined;//true



原型链是基于__proto__形成的，继承是通过prototype实现的。

Function.prototype是个特例，它是函数对象，但是没有prototype属性。其他所有函数都有prototype属性。

Function.prototype.prototype === undefined;//true

内置的Function也是一个函数对象，它是通过自己来创建自己的。

Function.__proto__=== Function.prototype;//true

函数也是对象，因为Function.prototype__proto__指向Object.prototype。

typeof Function.prototype.__proto__) === "object";//true

Function.prototype.__proto__=== Object.prototype;//true

*/