/* util.callbackify */
// util.callbackify(original) 将异步函数转换成遵循异常优先的回调风格的函数。在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。

const util = require('util');       // 引入util模块

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});


/* util.inherits */
// util.inherits(constructor, superConstructor) 是一个实现对象间原型方法继承的函数。

function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello();    // 报错，因为只继承了原型方法，Base属性没有继承
console.log(objSub);

// 输出：
// base 
// Hello base 
// { name: 'base', base: 1991, sayHello: [Function] } 
// sub 
// { name: 'sub' }


/* util.inspect */
// util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。


/* util.isArray(object) */
// 如果给定的参数 "object" 是一个数组返回 true，否则返回 false。


util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false


/* util.isRegExp(object) */
// 果给定的参数 "object" 是一个正则表达式返回true，否则返回false。


util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false


/* util.isDate(object) */
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。


util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
