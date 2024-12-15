/**
 * 构造函数继承，借助 call调用Parent函数
 */
function Parent(){
    this.name = 'parent';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(){
    Parent.call(this);
    this.type = 'child'
}

let child = new Child();    // {name: 'parent', type: 'child'}
console.log(child.name);    // parent
console.log(child.getName());  // 会报错

// 弊端：只能继承父类的实例属性和方法，不能继承父类原型属性或者方法