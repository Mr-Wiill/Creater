/* 
    var命令和function命令声明的全局变量，依旧是顶层对象的属性；
    let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
*/

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined