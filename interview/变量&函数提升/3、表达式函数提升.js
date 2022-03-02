function hoistFunction() {
    foo(); // 2

    var foo = function() {
        console.log(1);
    };

    foo(); // 1

    function foo() {
        console.log(2);
    }

    foo(); // 1
}

// 输出的结果依次是2 1 1

/* 
// 预编译之后
function hoistFunction() {
    var foo;

    foo = function foo() {
        console.log(2);
    }

    foo(); // 2

    foo = function() {
        console.log(1);
    };

    foo(); // 1

    foo(); // 1
}

hoistFunction();
*/

/* 
    解析：因为JavaScript中的函数是一等公民，函数声明的优先级最高，会被提升至当前作用域最顶端，所以第一次调用时实际执行了下面定义的函数声明，
    然后第二次调用时，由于前面的函数表达式与之前的函数声明同名，故将其覆盖，以后的调用也将会打印同样的结果。
*/