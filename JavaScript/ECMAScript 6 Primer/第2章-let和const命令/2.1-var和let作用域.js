/*var定义的变量，在全局范围内有效*/
var a = [];
for (var i=0; i<10; i++){
    a[i] = function () {
        // console.log(this);
        console.log(i);     //这里的i指向全局的i，而全局的i只有一个，它就是for循环执行结束后的i，i=10
    }
}
a[6]();    //输出：10



/*let定义的变量，在其执行的块级作用域内有效*/
let b = [];
for (let i=0; i<10; i++){   //块级作用域，起始；for循环有个特别之处，()里为父级作用域，{}里为子级作用域
    b[i] = function () {
        // console.log(this);
        console.log(i);     //let定义的i，只在本轮循环有效，每次循环i都会等到一个新的值
    }
}   //块级作用域，结束
b[6]();     //6
