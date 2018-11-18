/*三点运算符*/
/*
    展开数组：...Array  用于把数组展开，如[1,2,3,4] 展开后显示 1 2 3 4
    收拢数组：用于函数传参；
*/
let arr = ["apple", "banana", "strawberry"];
console.log(arr);
console.log(...arr);        //展开数组

function f(...a) {          //收拢数组
    console.log(a);
}
f("apple", "banana", "strawberry");


/*当做剩余运算符rest*/
function f1(a,b,...c) {     //...把剩下的参数都传给c
    console.log(a,b,c);
}
f1(1,2,3,51,6,5,16);



/*复制数组*/
function f2() {
    let arr = [1,3,5,3,56,12];
    let arr2 = [...arr];            //arr2复制了arr数组的元素
    let arr3 = Array.from(arr);     //Array.form方法也可以进行数组复制
    console.log(arr2);
    console.log(arr3);
}
f2();



/*
    总结：
    1、三点运算符，用于展开数组或收拢数组；
    2、可以当做剩余运算符；
    3、应用于复制数组（...arr）；
    4、Array.form(arr) 复制arr数组；
*/