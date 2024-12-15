/* 
    0、Map
    ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

    1、Map实例的属性和操作方法
    （1）size 属性
        size属性返回 Map 结构的成员总数。
    （2）Map.prototype.set(key, value)
        set方法设置键名key对应的键值为value，然后返回整个 Map 结构。
    （3）Map.prototype.get(key) 
        get方法读取key对应的键值，如果找不到key，返回undefined。
    （4）Map.prototype.has(key)
        has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
    （5）Map.prototype.delete(key)
        delete方法删除某个键，返回true。如果删除失败，返回false。
    （6）Map.prototype.clear()
        clear方法清除所有成员，没有返回值。

    2、Map遍历方法
    Map 结构原生提供三个遍历器生成函数和一个遍历方法：
    Map.prototype.keys()：返回键名的遍历器。
    Map.prototype.values()：返回键值的遍历器。
    Map.prototype.entries()：返回所有成员的遍历器。
    Map.prototype.forEach()：遍历 Map 的所有成员。
    
    3、WeakMap与Map类似，不同点请参考WeakSet


*/

/* 0、Set数据结构 */

const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false


/* 与其他数据结构的互相转换 */

// （1）Map 转为数组
const myMap = new Map()
    .set(true, 7)
    .set({ foo: 3 }, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// （2）数组 转为 Map
new Map([
    [true, 7],
    [{ foo: 3 }, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

// （3）Map 转为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

// （4）对象转为 Map
let obj = { "a": 1, "b": 2 };
let map = new Map(Object.entries(obj));

//（5）Map 转为 JSON（Map先转成对象，再转成JSON）
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'

//   （6）JSON 转为 Map
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

jsonToStrMap('{"yes": true, "no": false}')
  // Map {'yes' => true, 'no' => false}
