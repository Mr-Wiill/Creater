/*
    静态方法：在函数名前加static
    如：static aaa(){}         调用：父类.aaa()
*/
/*例1*/
class Person {
    constructor(){

    }
    show(){
        return `这是普通方法`;
    }
    static staticMethods(){     //静态方法
        return `这是静态方法`;
    }
}
let p = new Person();
console.log(p.show());
console.log(Person.staticMethods());        //调用静态方法