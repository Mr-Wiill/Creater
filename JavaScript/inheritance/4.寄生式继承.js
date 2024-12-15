/**
 * 寄生式继承
 * 借助Object.create方法实现普通对象的继承
 */
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function () {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function () {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);

console.log(person5.getName());     // parent5
console.log(person5.getFriends());  // ["p1", "p2", "p3"]

// 弊端：Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能