/* 
    new一个构造函数的实例的原理：
    1、创建一个新对象；
    2、创建一个变量接收构造函数；
    3、使新对象的__proto__指针指向构造函数的原型；
    4、是构造函数的this指向新对象；
    5、返回新对象。
*/

function newFn() {
    var obj = new Object(),
        Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var res = Constructor.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}



/* 实例 */
function Otaku(name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = newFn(Otaku, 'Kevin', '18')    // 等价于 new Otaku('Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin