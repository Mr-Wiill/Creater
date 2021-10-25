/* 
    0、Set
    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

    1、Set 实例的属性和方法
    Set 结构的实例有以下属性：
    Set.prototype.constructor：构造函数，默认就是Set函数。
    Set.prototype.size：返回Set实例的成员总数。

    Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法：
    Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
    Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
    Set.prototype.clear()：清除所有成员，没有返回值。

    2、遍历操作
    Set 结构的实例有四个遍历方法，可以用于遍历成员。
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员

    3、WeakSet
    const ws = new WeakSet();   // 作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。
    WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。WeakSet 的成员只能是对象，而不能是其他类型的值。
    WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存。

    4、WeakSet的方法
    WeakSet 结构有以下三个方法：
    WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

*/

/* 0、Set数据结构 */
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5


/* 1、Set 实例的属性和方法 */

s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false