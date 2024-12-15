/**
 * 隐式绑定
 * 函数作为某个对象的方法调用，这时this指这个上级对象
 */

// 例1 如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上
function fn() {
    console.log(this.name);
};
let obj1 = {
    name: 'Jack',
    func: fn
};
obj.func() // Jack


// 例2 如果函数调用前存在多个对象，this指向距离调用自己最近的对象， 即使那个对象没有那个属性
function fn1() {
    console.log(this.name);
};
let obj2 = {
    func: fn1,
};
let obj3 = {
    name: '听风是风',
    o: obj
};
obj3.o.func() // undefined，this的上一级对象为obj2，obj2内部并没有name变量的定义，所以输出undefined


// 例3 this永远指向的是最后调用它的对象
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a);    // undefined
            console.log(this);      // window
        }
    }
}
var j = o.b.fn;
j();    // 虽然fn是对象b的方法，但是fn赋值给j时候并没有执行，所以最终指向window
