/* 
    0、Object.is() 
    Object.is用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
    不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

    1、Object.assign()
    Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
    第一个参数是目标对象，后面的参数都是源对象
    如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
    如果只有一个参数，Object.assign()会直接返回该参数。
    由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
    Object.assign()方法实行的是浅拷贝，而不是深拷贝。

    2、__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
    __proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）
    Object.setPrototypeOf(obj, proto)（写操作）、Object.getPrototypeOf(obj, proto)（读操作）、Object.create()（生成操作）代替。

    3、Object.keys()，Object.values()，Object.entries()，Object.fromEntries()
    Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
    Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
    Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
    Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
    
*/


/* 0、Object.is()  */

Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

// 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
+ 0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// ES5 可以通过下面的代码，部署Object.is。
Object.defineProperty(Object, 'is', {
    value: function (x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});


/* 1、Object.assign() */

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
