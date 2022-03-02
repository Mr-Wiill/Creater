function sayHi() {
    phrase = "Hello"; // (*)

    if (false) {
        var phrase;
    }

    alert(phrase);
}
sayHi();


/*
解析：所有的 var 都被“提升”到了函数的顶部。
所以，在上面的例子中，if (false) 分支永远都不会执行，但没关系，它里面的 var 在函数刚开始时就被处理了，所以在执行 (*) 那行代码时，变量是存在的。

注意：声明会被提升，但是赋值不会。
*/