/*  定义类的方法：
    1）声明的形式：
    class className{
        constructor(){      //构造方法（函数），调用new，自动执行
            函数执行体
        }
    }
    let class1 = new className();       //调用new，创建一个class实例

    2）表达式的形式：
    const className = class {
        constructor(){      //构造方法（函数），调用new，自动执行
            函数执行体
        }
    }
    let class1 = new className();       //调用new，创建一个class实例
*/

/*
    注意：
    1、ES6里class没有提升功能，在ES5里用函数模拟可以提升，默认函数提升；
*/


/*例1：定义一个person类*/
class Person{               //声明形式
// const Person = class{    //表达式形式
    constructor(name,age){
        // console.log(`构造函数执行了${name},${age}`);
        this.name = name;       //属性
        this.age = age;
    }
    showName(){         //方法
        return `姓名：${this.name}`;
    }
    showAge(){
        return `年龄：${this.age}`;
    }
}
let p1 = new Person("jack",18);
console.log(p1.showName());
console.log(p1.showAge());


/*例2：方法名可以是一个表达式*/
let a = "aaa";
let b = "bbb";
class Dog {
    constructor(name){
        this.name = name;
    }
    [a+b](){
        return this.name;
    }
}
let d = new Dog("单身dog");
// console.log(d.aaabbb());     //调用方法一
console.log(d[a+b]());      //调用方法二


/*
    总结:
    1、ES6里使用关键字class定义类；
    2、类的属性在构造方法constructor(){}里面定义，定义方法不需要使用function关键字；
    3、class类的方法名可以是一个表达式形式；
    4、class没有提升功能，ES5用函数定义的类具有提升；
*/