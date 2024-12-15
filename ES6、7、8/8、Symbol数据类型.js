/* 
    0、Symbol
    ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值

    1、Symbol.prototype.description
    创建 Symbol 的时候，可以添加一个描述。

    2、Object.getOwnPropertySymbols()
    可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
    Reflect.ownKeys()方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

    3、Symbol.for()，Symbol.keyFor() 
    有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
    Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。


*/

/*  0、Symbol */
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');
s1 === s2 // false


/* 1、Symbol.prototype.description */

const sym = Symbol('foo');

sym.description // "foo"


/* 3、Symbol.for()，Symbol.keyFor()  */

let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true

// Symbol.keyFor()
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined