/*
    Array.fill(填充东西，开始位置，结束位置)      填充数组
*/

let arr1 = new Array(10);        //声明一个length=10的空数组
let arr2= [1,2,3,5,6,8];
arr1.fill("Default",1 ,5);      //填充空数组
arr2.fill("default", 1, 5);     //替换原有的值
console.log(arr1);
console.log(arr2);