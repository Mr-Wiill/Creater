console.log(undefined == null);     // true



// 考察typeof
typeof Symbol()     //"symbol"
typeof Number()     //"number"
typeof NaN          //"number"
typeof String()     //"string"
typeof Function()   //"function"
typeof undefined    //"undefined"
typeof Boolean()    //"boolean"

typeof null         //"object"
typeof Object()     //"object"
typeof Array()      //"object"




// 考察setTimeout用法
function checkState() {
    alert("liyuming");
}
window.setTimeout(checkState(), 10000); //立即被调用 
window.setTimeout(checkState, 10000); // 10s后被调用 
window.setTimeout("checkState()", 10000); //10s后被调用 注意和第一个的区别 有引号



// 什么是链式作用域？




/* 在JavaScript中，false、null、0、" "、undefined 和 NaN被称为假值。 */
/* 
    Boolean构造函数
    new Boolean(value) 返回一个布尔对象
    Boolean(value) 显式转换为布尔值
*/
var x = new Boolean();
// 1.如果Boolean构造函数的参数不是一个布尔值,则该参数会被转换成一个布尔值。
// 2.如果参数是 0, -0, null, false, NaN, undefined, 或者空字符串 (“”),生成的Boolean对象的值为false。
// 3.其他任何值,包括任何对象或者字符串”false”, 都会创建一个值为true的Boolean对象。
var value = Boolean(value);
// 非布尔值转化成布尔值，需要直接使用Boolean函数，而不能通过新建Boolean对象。



/* 
    逗号表达式只有最后一项是有效的，即对于i<10,j<6; 来说，判断循环是否结束的是 j < 6；而对于 j<6,i<10; 来说，判断循环是否结束的是 i < 10。
*/
var k = 0;
for (var i = 0, j = 0; i < 10, j < 6; i++, j++) {
    k += i + j;
}
console.log(k)    // 打印结果为 30

var k = 0;
for (var i = 0, j = 0; j < 6, i < 10; i++, j++) {
    k += i + j;
}
console.log(k)    // 打印结果为 90



/* 变量提升和函数提升 */
/* 
    ● 首先， js有变量提升和函数提升，指的是用 var声明变量 或用 function 函数名（）{  } 声明的，会在 js预解析 阶段提升到顶端；（es6的let  和 const 不会提升）
    ● 其次，函数提升优先级 高于 变量提升
    ● 注意， 相同作用域时声明变量而不赋值则还是以前的值， 而子作用域声明不赋值则函数内该值为undefined，因为声明了私有变量
*/
console.log(foo);
var foo = 1  //变量提升
console.log(foo)
foo()
function foo() { //函数提升
    console.log('函数')
}

// 等价于

function foo() { //提到顶端
    console.log('函数')
}
var foo
console.log(foo) //输出foo这个函数，因为上面foo没有被赋值，foo还是原来的值 
foo = 1;  //赋值不会提升,赋值后 foo就不再是函数类型了，而是number类型
console.log(foo) //输出1
foo() //这里会报错，因为foo不是函数了



/* 立即执行函数 （IIFE）*/
// 匿名函数拥有独立的词法作用域，这不仅避免了外界访问此IIFE中的变量，而且又不会污染全局作用域。
var b = 3;
(function () {
    b = 5;
    var b = 2;
})();
console.log(b);     // 3


/* 
setTimeout是异步操作，每次遇到它不是先运行，而是先压入执行栈。等i执行完for循环，setTimeout才开始执行，此时的i已经是10了
*/
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// 输出 10个10



/* this绑定的优先级是new>bind>call(apply)>obj.func()>默认绑定 */
/* 
函数fn的调用方式：
1、fn();
2、fn.apply(this, [参数...])，fn.call(this, 参数1, 参数2...)
*/
var obj = {};
obj.log = console.log;
obj.log.call(console, this);    // 等价于 console.log(this)，call改变this指向，外部传进去的this所以是window
// 输出 window



console.log(!![])       // true
console.log(!!{})       // true
console.log(!!function () { })       // true



/* 函数提升优先级高于变量提升，且不会被变量声明覆盖，但会被变量赋值覆盖 */
var foo = function (x, y) {
    return x - y;
}
function foo(x, y) {
    return x + y;
}
var num = foo(1, 2);        // 输出 -1

// 等价于

function foo(x, y) { return x + y; }    //函数声明优先于变量提升
var foo;
foo = function (x, y) { return x - y; } //变量赋值覆盖了函数声明
var num = foo(1, 2);