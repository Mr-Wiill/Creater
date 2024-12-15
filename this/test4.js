var x = 20;
var a = {
    x: 15,
    fn: function () {
        var x = 30;
        return function () {
            return this.x
        }
    }
}
console.log(a.fn());
console.log((a.fn())());
console.log(a.fn()());
console.log(a.fn()() == (a.fn())());
console.log(a.fn().call(this));
console.log(a.fn().call(a));

/* 
1.console.log(a.fn());
对象调用方法，返回了一个方法。
# function() {return this.x}

2.console.log((a.fn())());
a.fn()返回的是一个函数，()()这是自执行表达式。this -> window
# 20

3.console.log(a.fn()());
a.fn()相当于在全局定义了一个函数，然后再自己调用执行。this -> window
# 20

4.console.log(a.fn()() == (a.fn())());
# true

5.console.log(a.fn().call(this));
这段代码在全局环境中执行，this -> window
# 20

6.console.log(a.fn().call(a));
this -> a
# 15
*/