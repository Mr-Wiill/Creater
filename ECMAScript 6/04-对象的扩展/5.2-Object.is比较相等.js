/*
    Object.is(obj1,obj2)  用于判断两个对象是否相等，相等返回true，否则返回false。
*/

console.log(Object.is(NaN, NaN));       //true
console.log(Object.is(NaN, Number));    //false

console.log(Object.is("aaa", "bbb"));   //false