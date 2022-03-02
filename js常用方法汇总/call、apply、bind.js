/* 
    call()
    直接调用该执行函数，在执行的时候，将函数内部的作用域绑定到指定的作用域。（call()方法接受若干个参数的列表）
*/
/* 
    apply()
    直接调用该执行函数，在执行的时候，将函数内部的作用域绑定到指定的作用域。
    call()是apply()的一颗语法糖，作用和apply()一样，同样可实现继承，唯一的区别就在于call()接收的是参数列表，而apply()则接收参数数组。
*/
/* 
    bind()
    创建一个新的函数的引用，并绑定到一个作用域特定作用域上，同时支持传参。
    bind则和call的用法差不多，唯一区别是，call和apply会立刻调用函数，bind只是绑定this
    格式为： bind(作用域参数，参数1，参数2)
*/

var name = "jack";
var age = 18;
var obj = {
    name: "tom",
    objAge: this.age,
    myFn: function(from, to) {
        console.log(`${this.name}的年龄是${this.age}，从${from}去${to}`)
    }
}
var db = { 
    name: 'steven',
    age: 29
}

obj.myFn()                  // tom的年龄是undefined，从undefined去undefined

obj.myFn.call()             // jack的年龄是18，从undefined去undefined
obj.myFn.apply()             // jack的年龄是18，从undefined去undefined
obj.myFn.bind()()             // jack的年龄是18，从undefined去undefined

obj.myFn.call(db)           // steven的年龄是99，从undefined去undefined
obj.myFn.apply(db)           // steven的年龄是99，从undefined去undefined
obj.myFn.bind(db)()           // steven的年龄是99，从undefined去undefined

obj.myFn.call(db, '上海', '杭州')       // steven的年龄是99，从上海去杭州
obj.myFn.apply(db, ['上海', '杭州'])    // steven的年龄是99，从上海去杭州
obj.myFn.bind(db, '上海', '杭州')()       // steven的年龄是99，从上海去杭州

/* 
相似之处

都是用来改变函数的this对象；
第一个参数都是this要指向的对象；
都可利用后继参数传参； 
*/


/* 
区别

都可以用来代替另一个对象调用一个方法，将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
bind()是返回一个新函数，供以后调用，而apply()和call()是立即调用。
call()和apply()唯一区别是参数不一样，call()是apply()的语法糖；

*/


/* 
选择使用

如果不需要关心具体有多少参数被传入函数，选用apply()；
如果确定函数可接收多少个参数，并且想一目了然表达形参和实参的对应关系，用call()；
如果想要将来再调用方法，不需立即得到函数返回结果，则使用bind();
 */