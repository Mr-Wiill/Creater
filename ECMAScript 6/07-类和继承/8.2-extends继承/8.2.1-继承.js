/*
    ES6的继承方法：
    class Father{
    }
    class Children extends Father{      //通过extends关键字实现继承
        constructor(){
            super();        //调用父类的构造函数（constructor），用来继承父类的this对象（子类本身没有）
        }
        methodName(){
            super.methodName();     //继承同名方法
        }
    }
*/

/*例1*/
/*
class Person {
    constructor(name){
        this.name = name;
    }
    showName(){
        return `名字为${this.name}`;
    }
}
class Student extends Person {
    constructor(name){
        super(name);       //向父类传一个参数name
    }
}
let stu = new Student("jack");
console.log(stu.showName());        //输出：  名字为jack
*/



/*例2：子类重写父类方法*/
class Animal {
    constructor(name){
        this.name = name;
    }
    showName(){
        console.log(`父类showName${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name, skill){
        super(name);
        this.skill = skill;
    }
    showSkill(){        //  子类新增方法
        return `我会${this.skill}`;
    }
    showName(){
        super.showName();
        console.log(`子类showName`);
    }
}
let d = new Dog("二逗", "吃");
d.showName()
console.log(d.showSkill());