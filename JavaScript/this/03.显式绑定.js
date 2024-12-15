/**
 * 显式绑定
 * 是指我们通过call、apply以及bind方法改变this的绑定
 */

// 例1 分别通过call、apply、bind改变了函数fn的this指向
let obj1 = {
    name: '听风是风'
};
let obj2 = {
    name: '时间跳跃'
};
let obj3 = {
    name: 'echo'
}
var name = '行星飞行';
function fn() {
    console.log(this.name);
};

fn();   //行星飞行
fn.call(obj1);      //听风是风
fn.apply(obj2);     //时间跳跃
fn.bind(obj3)();    //echo


// 例2 指向参数提供的是null或者undefined，那么 this 将指向全局对象
fn();   //行星飞行
fn.call(null);          // 行星飞行
fn.apply(undefined);    // 行星飞行
fn.bind(null)();        // 行星飞行


// 例3 在js API中部分方法也内置了显式绑定，以forEach为例
let obj4 = {
    name: '听风是风'
};

[1, 2, 3].forEach(function () {
    console.log(this.name);     // window
});

[1, 2, 3].forEach(function () {
    console.log(this.name);     // 听风是风*3
}, obj4);   // 指定this指向


/**
 * call、apply与bind有什么区别？

一、执行方式不同
call、apply与bind都用于改变this绑定，call和apply是改变后页面加载之后就立即执行，是同步代码。bind是异步代码，改变后不会立即执行；而是返回一个新的函数。

二、传参方式不同
call和bind传参是一个一个逐一传入，不能使用剩余参数的方式传参。
apply使用数组的方式传入的，只要是数组方式就可以使用剩余参数的方式传入。
在传参的情况下，call的性能要高于apply，因为apply在执行时还要多一步解析数组。

三、修改this的性质不同
call、apply只是临时的修改一次，也就是call和apply方法的那一次；当再次调用原函数的时候，它的指向还是原来的指向。
bind是永久修改函数this指向，但是它修改的不是原来的函数；而是返回一个修改过后新的函数，此函数的this永远被改变了，绑定了就无法再次通过bind、apply或 call 修改                      
 
*/