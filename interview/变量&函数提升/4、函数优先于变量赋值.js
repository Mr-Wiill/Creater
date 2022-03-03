var foo = 3;

function hoistFunction() {
    console.log(foo); // function foo() {}

    foo = 5;
    
    console.log(foo); // 5

    function foo() {}
}

hoistFunction();
console.log(foo);     // 3

/* 

// 预编译之后
var foo = 3;

function hoistFunction() {
   var foo;

   foo = function foo() {};

   console.log(foo); // function foo() {}
   
   foo = 5;

   console.log(foo); // 5
}

hoistFunction();
console.log(foo);    // 3

*/


/* 函数声明被提升至作用域最顶端，然后被赋值为5，而外层的变量并没有被覆盖 */
