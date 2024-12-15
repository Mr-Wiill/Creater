/**
 * 寄生组合式继承
 * 寄生式继承 + 组合式继承
 */

function clone(parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
    return this.name;
}

function Child6() {
    Parent6.call(this);     // 构造函数继承
    this.friends = 'child5';
}
clone(Parent6, Child6);
Child6.prototype.getFriends = function () {
    return this.friends;
}

let person6 = new Child6();
console.log(person6);               // {friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person6.getName());     // parent6
console.log(person6.getFriends());  // child5