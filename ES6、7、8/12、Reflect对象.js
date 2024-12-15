/* 
    0、Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。
    将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。

    Reflect对象一共有 13 个静态方法。
    Reflect.get(target, name, receiver)
    Reflect.set(target, name, value, receiver)
    Reflect.apply(target, thisArg, args)
    Reflect.construct(target, args)
    Reflect.has(target, name)
    Reflect.defineProperty(target, name, desc)
    Reflect.deleteProperty(target, name)
    Reflect.ownKeys(target)
    Reflect.isExtensible(target)
    Reflect.preventExtensions(target)
    Reflect.getOwnPropertyDescriptor(target, name)
    Reflect.getPrototypeOf(target)
    Reflect.setPrototypeOf(target, prototype)

*/

/* 0、Reflect对象一共有 13 个静态方法。*/

// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar;
    },
};
var myReceiverObject = {
    foo: 4,
    bar: 4,
};
Reflect.get(myObject, 'baz', myReceiverObject) // 8


// Reflect.set方法设置target对象的name属性等于value。 
  myObject.foo // 1
  Reflect.set(myObject, 'foo', 2);
  myObject.foo // 2
  Reflect.set(myObject, 'bar', 3)
  myObject.foo // 3


//  Reflect.has方法对应name in obj里面的in运算符。
// 旧写法
'foo' in myObject // true
// 新写法
Reflect.has(myObject, 'foo') // true


// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。
// 旧写法
delete myObject.foo;
// 新写法
Reflect.deleteProperty(myObject, 'foo');


// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
function Greeting(name) {
    this.name = name;
}
// new 的写法
const instance = new Greeting('张三');
// Reflect.construct 的写法
const instance = Reflect.construct(Greeting, ['张三']);


// Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。
const myObj = new FancyThing();
// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype;
// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;


// Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。
const myObj = {};
// 旧写法
Object.setPrototypeOf(myObj, Array.prototype);
// 新写法
Reflect.setPrototypeOf(myObj, Array.prototype);
myObj.length // 0


// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
/* 
    如果要绑定一个函数的this对象，可以这样写fn.apply(obj, args)，
    但是如果函数定义了自己的apply方法，就只能写成Function.prototype.apply.call(fn, obj, args)，
    采用Reflect对象可以简化这种操作。
*/
const ages = [11, 33, 12, 54, 18, 96];

// 旧写法
const youngest = Math.min.apply(Math, ages);
const oldest = Math.max.apply(Math, ages);
const type = Object.prototype.toString.call(youngest);

// 新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);


// Reflect.defineProperty方法基本等同于Object.defineProperty，用来为对象定义属性。未来，后者会被逐渐废除
function MyDate() {
    /*…*/
}
  
// 旧写法
Object.defineProperty(MyDate, 'now', {
    value: () => Date.now()
});

// 新写法
Reflect.defineProperty(MyDate, 'now', {
    value: () => Date.now()
});


// Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者。
Object.defineProperty(myObject, 'hidden', {
    value: true,
    enumerable: false,
});

// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');

// 新写法
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');


// Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
// 旧写法
Object.isExtensible(myObject) // true

// 新写法
Reflect.isExtensible(myObject) // true


// Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
var myObject = {};

// 旧写法
Object.preventExtensions(myObject) // Object {}

// 新写法
Reflect.preventExtensions(myObject) // true


// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
var myObject = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]