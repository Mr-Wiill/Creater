/*
    ES6类里面的this指向：默认指向class的实例，若将这个方法取出单独使用，this指向它的运行环境；

    矫正this的方法：
    1、fn.call(this指向, args1, args2,...);
    2、fn.apply(this指向, [args1, args2,...]);
    3、fn.bind(this指向);
*/

/*例1：类里面的this指向*/
/*
let name = "Cai";
class Dog{
    constructor(){
        this.name = 'Wang';
    }
    showName(){
        console.log(this);      //undefined
        return this.name;
    }
}
let d = new Dog();
let {showName} = d;         //把d 实例结构赋值给showName，这时showName方法的this已不是指向constructor
console.log(showName());    //报错，因为此时的this已经不是指向constructor，所以name是为定义的
*/


/*例2：矫正this的指向*/
class Person {
    constructor(){
        this.name = "jack";
        this.show = this.show.bind(this);       //绑定this，使show方法的this指向Person
    }
    show(){
        console.log(this);      //指向Person
        return this.name;
    }
}
let p = new Person();
let {show} = p;
console.log(show());


/*
    总结：
    1、类里面的this默认指向类实例，若将类的方法取出单独使用，则this指向其运行环境；
    2、可以使用bind方法来绑定this；
*/