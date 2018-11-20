/*--- B 继承了 A ---*/
function Father() {
    this.property = true;
}
Father.prototype.fatherProp = function () {
    console.log(this.property);
};

function Son() {
    this.sonproperty = false;
}

Son.prototype = new Father();      //B的原型继承了A的实例

Son.prototype.sonProp = function () {
    console.log(this.sonproperty);
};

var son1 = new Son();
son1.fatherProp();