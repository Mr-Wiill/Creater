/*
    arr.filter(function(item,index,array){},this指向)  用于过滤掉不符合的元素
    若回调函数返回true，就（把符合条件的元素）留下来；
*/

/*例1：filter过滤一个数组*/
let arr = [
    {title: "aaa", read: 100, hot: true},
    {title: "bbb", read: 200, hot: false},
    {title: "ccc", read: 300, hot: true},
    {title: "ddd", read: 400, hot: false},
];
let newArr = arr.filter((item, index, array)=>{
   return item;         //返回hot=true的元素
});
console.log(newArr);


/*
    总结：
    1、arr.filter(function(item,index,array){},this指向) 用于过滤一个不符合条件的元素；
    2、必须有return，若回调函数返回true，就保存（返回值）；
*/