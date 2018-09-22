/*
    模板字符串：` 模板内容 `; 使用反引号（`）字符，把模板内容包括起来。

    应用：1）当做普通字符串使用；
         2）定义多行字符串（所有的空格和换行都会输出，使用trim()方法取消换行）；
         3）可以使用${}在字符串内定义变量（大括号内可以放入任意js表达式）；
         4）在字符串中添加HTML标签；
         5）模板字符串中能引用函数；

    注意：1）如果要在模板字符串中使用反引号，则需要使用反斜杠转义；如\`
         2）模板字符串可以嵌套；
*/

/*例1 普通字符串*/
let str =`In javascript \n is a line-feed`;
console.log(str);   //In javascript
                    // is a line-feed


/*例2 在模板字符串中定义变量*/
let name = 'jack';
let time = 'today';
let str2 = `hello ${name}, how are you today?`;
console.log(str2);  //hello jack, how are you today?


/*例3 在模板字符串中添加HTML标签*/
let str3 = `input a html tag : <h1>this is a head</h1>`;
console.log(str3);  //input a html tag : <h1>this is a head</h1>    (HTML页面里不会显示标签)


/*例4 模板字符串中引用函数*/
function f() {
    return 'hello my son';
}
let str4 = `foo ${f()} bar`;
console.log(str4);  //foo hello my son bar