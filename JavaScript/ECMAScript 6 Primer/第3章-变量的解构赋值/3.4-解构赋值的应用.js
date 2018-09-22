/*
    解构赋值的应用：
    1）交换变量的值；
    2）从函数返回多个值；
    3）函数参数的定义；
    4）提取json数据；
    5）函数参数的默认值；
    6）遍历Map结构；
    7）输入模块的指导方法；
*/

/*例1 交换变量的值*/
let a = 'aaa';
let b = 'bbb';
[a, b] = [b, a];
console.log(a, b);      //bbb aaa


/*例2 从函数返回多个值（返回一个对象或数组）*/
function f() {
    return [1,2,3];     //返回数组
}
let [a2,b2,c2] =f();
console.log(a2, b2, c2);    //1 2 3

function f1() {
    return obj = {      //返回对象
        foo : '123',
        bar : '456'
    }
}
let {foo, bar} =f1();
console.log(foo, bar);      //123 456


/*例3 函数参数的定义*/
function f2([x,y,z]) {
    return x+y+z;
}
console.log(f2([1,2,3]));       //6


/*例4 提取json数据*/
let json = {
    id : 111,
    status : 'ok',
    data : [666, 888]
};
let {id, status, data:number} =json;
console.log(id, status, number);        //111 'ok' [ 666, 888 ]


/*例5 遍历Map解构*/
let map = new Map();
map.set('first', 'aaa');
map.set('second', 'bbb');
for (let [key, value] of map){
    console.log(`${key} is ${value}`)   //first is aaa     second is bbb
}



/*例6 输入模块的指定方法*/
// const {SourceMapConsumer, SourceNode} = require('source-map');