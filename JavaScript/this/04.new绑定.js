/**
 * 通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象
 */

// 例1 
function Test() {
    this.x = 1;
    this.fn = function () {
        console.log(this.x)
    }
}

var obj = new Test();
obj.fn()    // 1

var obj1 = new Test()
obj1.x = 2
obj1.fn()    // 2


// 例2 new过程遇到return一个对象，此时this指向为返回的对象
function fn() {
    this.user = 'xxx';  
    return {
        user: '---'
    };    
}
var a = new fn();  
console.log(a.user);    // ---


// 例3 如果返回一个基本数据类型的值时，则this指向实例对象
function fn1() {
    this.user = '===';  
    return 1;
}
var b = new fn1;  
console.log(b.user); // ===


// 例4 null虽然也是对象，但是此时new仍然指向实例对象
function fn2()  {  
    this.user = '!!!';  
    return null;
}
var c = new fn2;  
console.log(c.user); // !!!