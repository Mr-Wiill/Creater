/*--- 缺点：原型属性会被实例改动 ---*/
function Father() {
    this.colors = ["blue", "red", "green"];
}
function Son() {
}

Son.prototype = new Father();   //son继承了father后，son就变成了father的实例

var instance1 = new Son();
console.log(instance1.colors);
instance1.colors.push("yellow");    //son的此实例属性成了原型属性
console.log(instance1.colors);

var instance2 = new Son();
console.log(instance2.colors);
instance2.colors.splice(-1,1);
console.log(instance2.colors);

var instance3 = new Son();
console.log("instance3："+instance3.colors)