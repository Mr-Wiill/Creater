/*
    利用set的值具有唯一性，可以用它来给数组去重；
    步骤：1、set去重；2、[...set]转成数组；
*/

/*例1：给数组去重*/
let arr = [1,6,6,2,8,3,26,2,111,1,18,9,6,9,69];
let newArr = [... new Set(arr)];     //使用set给数组去重，然后使用扩展运算符...转成数组类型输出；
console.log(newArr);



/*例2：map映射和filter过滤*/
console.log("例2：");
let set = new Set([1,2,3,4]);
//[...set]为一个数组，对数组映射后，再转成set数据结构
let newSet1 = new Set([...set].map(val=>val*2));    //省去return，
console.log(newSet1);    //输出：Set { 2, 4, 6, 8 }

let newSet2 = new Set([...set].filter(val=>val%2==0));  //求偶数
console.log(newSet2);   //输出：Set { 2, 4 }