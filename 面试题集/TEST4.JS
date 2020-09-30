// 执行以下代码，输出什么

function Person(name) {
    this.name = name;
}
  
Person.prototype.print = function() {
    return this.name;
};

Person('abc');
console.log(name)

const a = new Person('abc').print.call({});
console.log(a);

const fn = () => {
    this.x = 'z';
};

const b = {x: 'y'};
fn.call(b);
console.log(b);