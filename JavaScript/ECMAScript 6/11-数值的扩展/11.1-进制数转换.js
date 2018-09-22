/*
    二进制（Binary）：在二进制数前加上0b;
    表达式：0b010101        //21的二进制

    八进制（Octal）：在八进制数前加上0o;
    表达式：0o666          //438的八进制

    十进制转其他进制数：十进制数.toString(转成的进制数)     如：110.toString(2)   //十进制转二进制

    其他进制转十进制数：parseInt(进制字符, 进制数)       如：parseInt('110', 2)    //二进制转十进制
*/

/*例1：二进制*/
let b = 0b010101;
console.log(b);     //输出：21


/*例2：八进制*/
let o = 0o666;
console.log(o);



/*十进制转其他进制：toString()*/
console.log("--------十进制转其他----------");
let d = 110;
console.log(d.toString(2));     //十进制转二进制，输出：1101110
console.log(d.toString(8));     //十进制转八进制，输出：156
console.log(d.toString(16));    //十进制转十六进制，输出：6e
console.log(d.toString(32));    //十进制转32进制，输出：3e

/*其他进制转十进制：parseInt()*/
console.log("--------其他转十进制----------");
let x = '100';
console.log(parseInt(x,2));     //二转十，输出：4
console.log(parseInt(x,8));     //八转十，输出：64
console.log(parseInt(x,16));    //十六转十，输出：256
console.log(parseInt(x,32));    //三十二转十，输出：1024
