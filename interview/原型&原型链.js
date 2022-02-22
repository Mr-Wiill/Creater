function Func(){}       // 等同于var Func = function(){}
var fn = new Func()     // Func的实例

// 实例对象的__proto__指针指向构造函数的原型（prototype）
console.log(fn.__proto__ == Func.prototype);        // true

// Func其实也是Function的实例
console.log(Func.__proto__ == Function.prototype);  // true

// Function是一个Object类型，所以它的原型__proto__指向Object
console.log(Function.prototype.__proto__ == Object.prototype);  //true

// 顶层原型对象的__proto__为null
console.log(Object.prototype.__proto__ == null);    //true


var arr = new Array()
console.log(arr.__proto__ == Array.prototype) // true
console.log( Array.prototype.__proto__ == Object.prototype) // true
console.log(Array.prototype) // [] (这是个空数组)
console.log(Object.prototype.__proto__) //null

console.log(Array.__proto__ == Function.prototype)// true
