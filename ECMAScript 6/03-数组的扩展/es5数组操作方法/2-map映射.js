/*
    arr.map(function(item, index, arr){},this指向);
    把一个数组循环映射成一个新数组（重新整理着这个数组结构，如修改了值）
*/

/*例1：一定要有return，若没有return，则等同于forEach.*/
let arr = [
    {title: "aaa", read: 100, hot: true},
    {title: "bbb", read: 200, hot: true},
    {title: "ccc", read: 300, hot: true},
    {title: "ddd", read: 400, hot: true},
];
let newArr = arr.map(function (item, index, array) {
    console.log(item,index);
    return 111;
});
console.log(newArr);        //输出返回值111



/*例2：map映射成一个新数组（修改数组结构）*/
let newArr1 = arr.map(function (item, index, array) {
    let json = {};
    json.t = `^-^${item.title}^-^`;
    json.r = item.read+200;
    json.h = item.hot==true && "棒棒哒";
    return json;
});
console.log(newArr1);


/*
    总结：
    1、arr.map(function(){item,index,array},this指向) 把一个数组循环映射成一个新数组；
    2、使用map一定要有return，没有return结果等同于forEach;
*/