
/*ES6查找字符串是否存在: includes()*/
/*
    es5方法： str.indexOf("要找东西")  找到返回字符串首次出现的index值，找不到返回-1
    es6方法： str.includes("要找东西")  找到返回true，找不到返回false
*/
let str1 = "apple banana pear strawberry";
console.log("includes方法：" + str1.includes("hello"));
console.log(str1.includes("banana"));




