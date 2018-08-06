/*
    let : 等效于var；
    count : 定义常量；
*/

/*块级作用域：{}内都称块级作用域*/

/*-------------------------------- let --------------------------------*/

/*
let a= 12;
function fa() {
    console.log(a);
    let a = 5;          //报错，es6没有预解析，不存在变量提升（在代码块内，只要let定义变量，在之前使用都报错）
}
fa();
*/

let b= 13;
function fb() {
    let b = 6;
    console.log(b);     //正确输出6
}
fb();


/*
let c = 1;
let c = 2;       //在同一个作用域内，不能重复定义变量，注意：for(){}里括()的为父级作用域，{}为子级作用域，不同一个
console.log(c);
*/


var arr = [];
for (var i=0; i<10; i++){
    arr[i] = function () {
        console.log(i);     //输出10
    }
}
arr[5]();



let arr = [];
for (let i=0; i<10; i++){
    arr[i] = function () {
        console.log(i);     //输出5
    }
}
arr[5]();

/*------------------------------ const ------------------------------*/

const newArr = ["apple", "banana"];
newArr == [];                       //const定义的变量不能修改，且其定义的变量必须有值（不能先定义后赋值）
console.log(newArr);


/*
    总结：
    1、let作用等效于var，但也有些区别；
    2、let没有预解析，不能提升变量，必须先定义后使用，不然会报错；
    3、const用于定义常量，其定义的变量不能再修改，且定义时必须有值，不能先定义后赋值；

*/