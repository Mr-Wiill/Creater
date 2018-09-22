console.log('-------情况1-------');
function f() {
    console.log('I am outside');
}
(function () {
   if (true){       //true
       function f() {       //重复声明一个f函数
           console.log('I am inside');
       }
   }
   f()
}());       //输出：I am inside



console.log('-------情况2-------');
function f1() {
    console.log('I am outside');
}
(function () {
    if (false){       //false
        function f1() {       //重复声明一个f函数
            console.log('I am inside');
        }
    }
    f1()    //报错：f1 is not a function
}());