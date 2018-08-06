/*
    Object.assign(目标对象, source1, source2, source3...)
    1、合并对象，并返回一个新的目标对象；
    2、复制参数；
*/

/*例1：合并json对象*/
let json1 = {a: 1};
let json2 = {a: 2,b: 2};    //当遇到相同的属性值时，后面的替代前面的
let json3 = {c: 3};

console.log(Object.assign({},json1,json2,json3));   // { a: 2, b: 2, c: 3 }


/*例2：复制数组*/
let arr1 = [1,2,3,4,5,6];
let arr2 = Object.assign([], arr1);
console.log(arr2);


