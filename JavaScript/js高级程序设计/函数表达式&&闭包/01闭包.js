/*  闭包是一个能读取其他函数内部变量的函数 ---阮一峰 */
function outer() {
    var n=99;       //局部变量
    function inner() {      //inner就是一个闭包，它能访问outer函数里的所有变量，并且能够在outer外部调用其局部变量
        console.log(n);
    }
    return inner;
}
var result = outer();
    result();