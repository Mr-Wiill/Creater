/*
    Array.from() 把类数组（获取一组元素、arguments...）对象转成数组
*/

/*例1：分割数组*/
let str = "apple";
let aStr = Array.from(str);     //等同于split（）
console.log(aStr);



/*例2：把类数组（arguments）转成数组*/
function show() {
    console.log(arguments);         //类数组
    console.log(arguments.length);      //类数组具有长度
    console.log(Array.from(arguments));     //类数组转成数组
}
show(1,2,3,4,5,6);



/*
    Array.from()     把一组值转成数组
*/

/*例1*/
console.log("apple", "banana", "orange");       //一组值
let newArr = Array.of("apple", "banana", "orange");
console.log(newArr);



/*
    总结：
    1、Array.from() 把类数组（arguments）转成数组;
    2、Array.of()  把一组值转成数组；
    3、Array.from() 可以用于分割数组和复制数组；
*/