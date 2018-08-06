/*
    class两个方法：
    getter ：取值函数
    setter ：存值函数
*/

/*例1*/
class Person {
    constructor(){

    }
    get aaa(){                      //获取函数值
        return `获取aaa属性`;
    }
    set aaa(val){                   //设置函数值
        console.log(`设置的aaa属性值为${val}`);
    }
}
let p = new Person();
p.aaa = 123456;           //设置aaa的值
console.log(p.aaa);