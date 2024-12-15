function newFn() {
    var obj = new Object(), 
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var res = Constructor.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}



/* 实例 */
function Otaku (name, age) {
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
