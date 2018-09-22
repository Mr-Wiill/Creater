/*
    find(function(value, index, Array){})
    查找并返回数组中第一个符合条件的元素，如果没找到则返回undefined。
*/

/*例1*/
let arr = [81,52,3,152,1,19,20,100,999];
let result = arr.find((val, index, array)=>{
    return val >= 1000;
});
console.log(result);    //输出152


/*
    findIndex(function(value, index, array){})
    查找并返回数组中第一个符合条件的元素的index，若没找到则返回-1。
*/
let result2 = arr.findIndex((value, index, array)=>{
    return value >= 1000;
});
console.log(result2);       //输出3



/*
    总结：
    1、arr.find()方法用于查找字符串，并返回符合条件的第一个元素，若没有符合的则返回undefined；
    2、arr.findIndex()方法用于查找字符串，并返回符合条件的第一个元素的index，若没有符合的则返回-1；
*/