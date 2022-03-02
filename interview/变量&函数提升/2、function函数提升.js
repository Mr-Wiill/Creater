function hoistFunction() {
    foo(); // output: I am hoisted

    function foo() {
        console.log('I am hoisted');
    }
}

/* 
// 编译后等于

function hoistFunction() {
    function foo() {
        console.log('I am hoisted');
    }

    foo(); // output: I am hoisted
}

*/


/* 
注意：出现同名函数，后面会覆盖前面；
*/
function hoistFunction1() {
    function foo() {
        console.log(1);
    }

    foo(); // output: 2

    function foo() {
        console.log(2);
    }
}
