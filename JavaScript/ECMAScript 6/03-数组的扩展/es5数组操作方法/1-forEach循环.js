/*
   arr.forEach(回调函数, this指向谁);    用于数组的遍历，等同于for（var i=0; i<arr.length; i++）{ 表达式 }
   参数：回调函数，必选，对数组进行操作；
       this指向，可选，用于值明当前函数的this指向谁；
*/

/*例1：一个简单的forEach()*/
let arr1 = ["apple", "banana", "strawberry"];
arr1.forEach(function (val, index, arr) {        //参数分别为：数组元素（必选），元素索引（可选），数组（可选）
    console.log(val, index, arr);
});


/*例2：this的定义*/
arr1.forEach(function (val, index, arr) {
    console.log(this,val);
},123);         //指定this=123


/*例3：给forEach循环没有返回值*/
let newArr = arr1.forEach(function (item, index, arr) {
    return "item";
});
console.log(newArr);        //输出undefined




/*
    总结：
    1、arr.forEach(function(item,index,array){}, this指向)循环等同于使用for对数组进行遍历;
    2、返回函数必选，this指向可选；
    3、forEach没有返回值；
*/