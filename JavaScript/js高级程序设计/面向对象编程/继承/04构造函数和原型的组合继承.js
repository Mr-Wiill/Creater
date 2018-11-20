/* call和apply继承的方法：调用一个对象（父类）的方法，用另一个对象（子类）替换当前对象。 */
function Father(name) {
    this.name = name;
    this.colors = ["blue", "gray", "yellow"];
}
Father.prototype.sayName = function () {
    console.log(this.name);
};

function Son(name, age) {
    /* call()和apply()的区别在于第二个参数，apply第二个参数必须是数组或arguments，而call可以是任意类型 */
    Father.call(this, name);        //构造函数继承实例属性
    // Father.apply(this, arguments);
    this.age = age;
}

Son.prototype = new Father();       //原型链继承原型属性和方法
Son.prototype.constructor = Son;
Son.prototype.sayAge = function () {
    console.log(this.age);
}

var son1 = new Son("jack", 25);
son1.colors.push("red");
console.log(son1.colors);
son1.sayName();
son1.sayAge();

var son2 = new Son("jobs", 26);     //不受上一个实例属性更改的影响
console.log(son2.colors);
son2.sayName();
son2.sayAge();