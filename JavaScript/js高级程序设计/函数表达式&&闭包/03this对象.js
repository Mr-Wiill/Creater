/*-- 1、全局函数中，this等于window；2、当函数被作为对象方法，this指向对象；3、匿名函数中，this指向window；--*/

var name = "The window";
var object = {
    name : "My object",
    getNameFn : function f() {
        var that = this;        //把this赋值给that，所以that指向object
        return function () {
            return that.name;   //that.name指向object里面的这个name
        };
    }
};
console.log(object.getNameFn()());