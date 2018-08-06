/*
    三点运算符除了能应用于数组外，还可以应用于对象。
    1、作为剩余运算符进行赋值；
    2、复制对象；
*/

/*例1：...作为剩余运算符*/
let {x, y, ...z} = {x:1, y:2, c:3, d:4};
console.log(x,y,z);


/*例2：复制对象*/
let json = {a:11, b:22};
let json2 = {...json};
console.log(json2);
delete json2.b;     //删除json2的一项
console.log(json2);
console.log(json);