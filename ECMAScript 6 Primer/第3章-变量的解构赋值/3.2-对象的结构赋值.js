/*
    对象的结构赋值：
    1）变量名与对象的属性名相同才能赋值；
    2）默认值生效的条件是，对象的属性值严格等于undefined；
    3）解构失败，变量的值等于undefined；
    4）可以将现有对象的方法赋值给某个变量；
    5）可以指定默认值（对象的属性值严格等于undefined）；
*/

/*例1 基本对象结构赋值*/
let {a, b} = {a:'111', b:'222'};
console.log(a, b);      //111 222

let obj = {first:'hello', last:'world'};
let {first:f, last:l} = obj;        //对属性first的值f赋值，而不是first
console.log(f, l);      //hello world


/*例2 嵌套结构的对象*/
let obj2 = {
    p: [
        'hello',
        {y:'world'}
    ]
};
let {p:[x, {y}]} = obj2;
console.log(x, y);      //hello world


/*例3 给对象或数组创建值*/
let obj3 = {};
let arr = [];
({foo:obj3.prop, bar:arr[0]} = {foo:123, bar:true});
console.log(obj3);      //{ prop: 123 }
console.log(arr);       //[ true ]

/*例4 将现有方法赋值给某个变量*/
let {ceil, floor, round} = Math;
console.log(ceil(9.6));     //10
console.log(floor(9.6));    //9
console.log(round(9.6));    //10



