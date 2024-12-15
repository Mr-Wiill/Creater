/**
 * 原型式继承
 * 借助Object.create方法实现普通对象的继承
 */
let parent = {
    name: "parent",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person = Object.create(parent);
  person.name = "tom";
  person.friends.push("jerry");

  let person1 = Object.create(parent);
  person1.friends.push("lucy");

  console.log(person.name);     // tom
  console.log(person.name === person.getName()); // true
  console.log(person1.name);    // parent
  console.log(person.friends);  // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person1.friends); // ["p1", "p2", "p3","jerry","lucy"]

// 弊端：Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能