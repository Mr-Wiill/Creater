/* 
    0、ES6 允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内。

    1、Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

    3、属性的遍历
    （1）for...in
        for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
    （2）Object.keys(obj)   
        Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
    （3）Object.getOwnPropertyNames(obj)
        Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
    （4）Object.getOwnPropertySymbols(obj)
        Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
    （5）Reflect.ownKeys(obj)
        Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
    以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。
    首先遍历所有数值键，按照数值升序排列。
    其次遍历所有字符串键，按照加入时间升序排列。
    最后遍历所有 Symbol 键，按照加入时间升序排列。

    4、super 关键字
    this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
    super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。、

    5、AggregateError 错误对象
    AggregateError 在一个错误对象里面，封装了多个错误。如果某个单一操作，同时引发了多个错误，，需要同时抛出这些错误，那么就可以抛出一个 AggregateError 错误对象，把各种错误都放在这个对象里面。
    AggregateError()构造函数可以接受两个参数：
        errors：数组，它的每个成员都是一个错误对象。该参数是必须的。
        message：字符串，表示 AggregateError 抛出时的提示信息。该参数是可选的。

*/


/* 0、 用表达式定义对象属性名*/

let propKey = 'foo';
let lastWord = 'last word';

let a = {
    [propKey]: true,
    [lastWord]: 'world',
    ['a' + 'bc']: 123,
    'first word': 'hello',
};
a[propKey] // true
a['last word'] // "world"
a[lastWord] // "world"
a['abc'] // 123
a['first word'] // "hello"

// 表达式还可以用于定义方法名。
let obj = {
    ['h' + 'ello']() {
        return 'hi';
    }
};

obj.hello() // hi


/* 1、方法可以获取该属性的描述对象 */

let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }


/* 1、AggregateError 错误对象 */

const error = new AggregateError([
    new Error('ERROR_11112'),
    new TypeError('First name must be a string'),
    new RangeError('Transaction value must be at least 1'),
    new URIError('User profile link must be https'),
], 'Transaction cannot be processed')
// 上面示例中，AggregateError()的第一个参数数组里面，一共有四个错误实例。第二个参数字符串则是这四个错误的一个整体的提示。