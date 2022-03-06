/* 
    闭包生成的变量分别存储在内存中，互补影响。
*/

function outerFun() {
    let a = 0;
    return function () {
        console.log(a++);
    }
}
var obj = outerFun();       
obj();  //结果为1
obj();  //结果为2
var obj2 = outerFun();
obj2();  //结果为1
obj2();  //结果为2
