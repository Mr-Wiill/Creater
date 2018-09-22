/*-- 1、全局函数中，this等于window；
     2、当函数被作为对象方法，this指向对象；
     3、匿名函数中，this指向window；
--*/

/*例1*/
var name = "The window";
var object = {
    name : "my object",
    getNameFn : function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFn()());