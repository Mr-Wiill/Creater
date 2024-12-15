/**
 * 原型链继承
 */
function Parent() {
    this.name = 'parent';
    this.play = [1, 2, 3]
}
function Child() {
    this.type = 'Child';
}
Child.prototype = new Parent();        // 原型链继承
const son = new Child();

console.log(son);           // { "type": "Child" }
console.log(son.__proto__); // { "name": "parent", "play": [ 1, 2, 3 ] }

var s1 = new Child();
var s2 = new Child();
s1.play.push(4);
console.log(s1.play, s2.play);  // [1,2,3,4]

// 改变s1的play属性，会发现s2也跟着发生变化了，这是因为两个实例使用的是同一个原型对象，内存空间是共享的

// 弊端：所有new的实例共享一个内存空间