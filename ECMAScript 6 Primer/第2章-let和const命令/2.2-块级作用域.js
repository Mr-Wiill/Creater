/*
    ES5只有全局作用域和局部作用域，这样会导致很多不合理的场景。
    1）内层遍历可能会覆盖外层遍历；2）用来计数的循环变量泄露为全局变量；

    ES6的块级作用域：let定义的遍历以{}为一个块级作用域，外层块级作用域不受内层的影响，即内层作用域定义的同名变量不会覆 盖外层的。
    1）外层作用域无法读取内层的作用域；
    2）内层块级作用域可以定义外层作用域的同名变量（不覆盖）；

*/

/*1）内层遍历可能会覆盖外层遍历；*/
var tmp = new Date();
// console.log(tmp);    //输出当前时间
function f() {
    console.log(tmp);   //undefined，此时的tmp被if内声明的temp覆盖，但是又在声明前使用，所以是undefined
    if (false){
        var tmp = 'hello world';
    }
}
f();

/*2）用来计数的循环变量泄露为全局变量；*/
let s = 'hello';
for (var i=0; i<s.length; i++){
    console.log(s[i]);
}
console.log(i);     //输出：5     变量i只用来控制循环，但是循环结束后没有消失，而泄露成了全局变量



/*ES6的块级作用域*/
(function f1() {
    let n = 12;     //不受if里面的同名变量的影响
    if (true){
        let n = 10;
    }
    console.log(n);     //12
}());