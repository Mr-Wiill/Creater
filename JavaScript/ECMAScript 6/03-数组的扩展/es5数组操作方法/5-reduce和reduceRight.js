/*
    arr.reduce((prev, cur, index, array)=>{})   从左到右遍历数组，并返回相应的回调函数结果
    参数： prev为上一轮函数执行结果（previousResult），cur为当前值(currentValue)
*/

/*例1：求和*/
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((prev,cur,index,array)=>{
    return prev + cur;           //上一次执行结果+当前值,实现累加；
});
console.log(sum);


/*例2：求幂*/
let arr1 = [2,3];
let powerLeft = arr1.reduce((prev,cur,index,array)=>{
    // return Math.pow(prev, cur);      //求prev的cur次幂等于多少，方法1
    return (prev ** cur);           //方法2（**等同于Math.pow）
});
console.log(powerLeft);




/*
    arr.reduceRight(function(prev,cur,index,array){})  从右到左去遍历数组，并返回相应的回调函数结果
*/
let powerRight = arr1.reduceRight((prev,cur,index,array)=>{
    return (prev ** cur);
});
console.log(powerRight);



/*
    总结：
    1、arr.reduce((prev,cur,index,array)=>{}) 从左到右遍历数组，并返回回调函数的值；
    2、arr.reduceRight((prev,cur,index,array)=>{}) 从右到左遍历数组，并返回回调函数的值；
*/