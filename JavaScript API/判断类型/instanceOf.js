/* 
instanceOf（）
instanceOf（）运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链

*/

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car); // true
  console.log(auto instanceof Object); // true
  