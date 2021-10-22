/* 
    0、Array.from()
    Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

    1、Array.of()
    Array.of()方法用于将一组值，转换为数组。

    2、Array.copyWithin()
    copyWithin()，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
    Array.prototype.copyWithin(target, start = 0, end = this.length)
    它接受三个参数。
    target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

    3、 find() 和 findIndex()
    find()，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
    findIndex()的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

    4、fill()
    fill()方法使用给定值，填充一个数组。有三个参数，第一个为填充的值（必），第二个和第三个分别为填充的起始位置（选）。

    5、entries()，keys() 和 values()
    用于遍历数组，keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

    6、includes() 
    Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值。
    第一个参数为包含的值，第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

    7、flat()，flatMap()
    flat()方法用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
    flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
    flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this。

    8、数组的空位
    ES5 对空位的处理：
    forEach(), filter(), reduce(), every() 和some()都会跳过空位。
    map()会跳过空位，但会保留这个值
    join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

    ES6 对空位处理：不会忽略空位，明确将空位转为undefined。
    Array.from方法会将数组的空位，转为undefined；
    扩展运算符（...）也会将空位转为undefined；
    copyWithin()会连空位一起拷贝；
    fill()会将空位视为正常的数组位置；
    for...of循环也会遍历空位；
    entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。

*/

/* 2、Array.copyWithin() */

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
// 上面代码表示将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2。

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]


/* 3、 find() 和 findIndex() */

[1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9;
}) // 10

[1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
}) // 2

// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v) {
    return v > this.age;
}
let person = { name: 'John', age: 20 };
[10, 12, 26, 15].find(f, person);    // 26


/* 4、fill() */

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

// 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]


/* 6、includes()  */

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true


/* 7、flat()，flatMap() */

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]

// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]


/*  8、数组的空位 */

/* ES5 */
// forEach方法
[,'a'].forEach((x,i) => console.log(i)); // 1

// filter方法
['a',,'b'].filter(x => true) // ['a','b']

// every方法
[,'a'].every(x => x==='a') // true

// reduce方法
[1,,2].reduce((x,y) => x+y) // 3

// some方法
[,'a'].some(x => x !== 'a') // false

// map方法
[,'a'].map(x => 1) // [,1]

// join方法
[,'a',undefined,null].join('#') // "#a##"

// toString方法
[,'a',undefined,null].toString() // ",a,,"


/* ES6 */
Array.from(['a',,'b'])
// [ "a", undefined, "b" ]

[...['a',,'b']]
// [ "a", undefined, "b" ]

[,'a','b',,].copyWithin(2,0) // [,"a",,"a"]

new Array(3).fill('a') // ["a","a","a"]

let arr = [, ,];
for (let i of arr) {
  console.log(1);
}
// 1
// 1

// entries()
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
[...[,'a'].keys()] // [0,1]

// values()
[...[,'a'].values()] // [undefined,"a"]

// find()
[,'a'].find(x => true) // undefined

// findIndex()
[,'a'].findIndex(x => true) // 0