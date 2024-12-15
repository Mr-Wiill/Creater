/**
 * 组合继承
 * 
 * 原型链继承 + 构造函数继承
 * 
 * 原型链继承父类原型对象的属性和方法，构造函数继承父类的实例属性和方法
 */

function Parent3() {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}
Parent3.prototype.getName = function () {
    return this.name;
}

function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);

console.log(s3.play);       // [1, 2, 3, 4]
console.log(s4.play);       // [1, 2, 3]
console.log(s3.getName());  // 正常输出'parent3'
console.log(s4.getName());  // 正常输出'parent3'

// 弊端：Parent3 执行了两次，造成了多构造一次的性能开销