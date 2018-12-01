/*
    set数据结构（集合）：类似于对象，但其里面不能有重复的值（具有唯一性）；

    语法：new Set([数组]);  返回一个对象

    属性：1、size用于查看set里面值的个数；

    方法：1、add() 往set里面添加一项，也可以add().add().add()...连串添加；
         2、delete() 删除指定项；
         3、has() 判断set里面有没有指定项，有返回true，否则返回false；
         4、clear() 清空set里的所有值；

    注意：set里面是数组，值不重复，没有key，没有get方法；
*/

/*例1：set里面不能有重复的值。*/
console.log("例1：");
let s = new Set(['a', 'b', 'c', 'a', 'b']);     //重复出现的值，只输出一次
console.log(s);     //输出：Set { 'a', 'b', 'c' }


/*例2：add()、delete()、has()、clear()、size*/
console.log("例2：");
let setArr = new Set();
setArr.add("a");        //添加一个值
setArr.add("a");        //不能重复添加
setArr.add('b','c');    //只能添加一项
setArr.add('c').add('d').add('e');      //可以连串添加；
console.log(setArr);    //输出：Set { 'a', 'b' }

console.log("------ delete分隔线 -------");
setArr.delete('b');     //删除b
console.log(setArr);    //输出：Set { 'a', 'c' }

console.log("------ has分隔线 -------");
let h1 = setArr.has('a');       //检查a
let h2 = setArr.has('b');       //检查b
console.log(h1+"，"+h2);         //输出：true，false

console.log("------ size分隔线 -------");

// let s = setArr.size;
console.log(setArr.size);       //输出：2

console.log("------ clear分隔线 -------");
setArr.clear();         //清空set里面的所有值；
console.log(setArr);    //输出：Set {}



