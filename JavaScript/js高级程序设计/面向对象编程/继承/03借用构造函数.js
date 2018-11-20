/* 借用构造函数解决原型继承出现的问题 */
function Father() {
    this.colors = ["blue", "gray", "yellow"];
}
function Son() {
    Father.call(this);      //son继承father
}

var instance1 = new Son();
instance1.colors.push("red");
console.log(instance1.colors);

var instance2 = new Son();
console.log(instance2.colors);        //不受上一个实例属性变更的影响