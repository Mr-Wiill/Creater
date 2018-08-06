/*数组*/
let [a, b, c] = [4, 5, 6];      //左右的结构要保持一致
console.log(a, b, c);



/*json*/
let json = {
    name : "jack",
    age : 18,
    job : "Software-Engineer"
};
let {name, age, job} = json;        //json的解构赋值
console.log(name, age, job);



/*函数*/
function f() {
    return {
        TOP : 10,
        LEFT : 20
    }
}
let {TOP, LEFT} = f();          //函数的解构赋值
console.log(TOP, LEFT);




let [aa, bb, cc="暂无数值"] = ["aaa", "bbb"];       //可以添加默认值
console.log(aa, bb, cc);




let aaa = 5;
let bbb = 10;                       //解构赋值用于交换两个数位置
[aaa, bbb] = [bbb, aaa];
console.log(aaa+" "+bbb);



/*
    总结：
    1、解构赋值可以应用于数组、json、函数等进行多元素赋值。
    2、可以添加默认值，可以应用于交换数组元素位置等；
*/
