/* 
    0、Iterator遍历器

    JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。
    这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。
    Iterator遍历器就是用来处理所有不同的数据结构，可直接使用for...of循环。

    ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。
    原生具备 Iterator 接口的数据结构如下：
    Array
    Map
    Set
    String
    TypedArray
    函数的 arguments 对象
    NodeList 对象


    2、for...in遍历对象，不仅遍历自己的属性还会遍历它原型链上的属性，可配合hasOwnProperty使用

    3、forEach循环无法中途跳出，break命令或return命令都不能奏效。

    4、for...of用于遍历具有Iterator属性的数据类型，可配合entries()、keys()和 values()

*/



/* 0、Iterator遍历器 */

// 简单实现一个Iterator遍历器
function makeIterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length ?
          {value: array[nextIndex++], done: false} :
          {value: undefined, done: true};
      }
    };
  }

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }


// 数组的Symbol.iterator属性
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }