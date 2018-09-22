/*
    Set和WeakSet的区别：
        new Set([数组])       存储数组，可以循环遍历，有size
        new WeakSet({json})     存储json对象，不能循环遍历，无size，没有clear()

    WeakSet也同样具有Set的一些方法，如add(),delete(),has()
*/

let wSet = new WeakSet();
let json1 = {
    a:1,
    b:2
};
let json2 = {
    a:'apple',
    b:'banana'
};
wSet.add(json1);
wSet.add(json2);
console.log(wSet);