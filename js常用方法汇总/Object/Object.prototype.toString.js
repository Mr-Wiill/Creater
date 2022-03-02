// 返回当前对象对应的字符串形式。

function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return '' + this.name;
  }
  
  console.log(dog1.toString());  // Gabby
  