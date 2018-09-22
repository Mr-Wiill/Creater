/*
    json对象有两个方法：
    1、stringify() :  将js对象序列化为json字符串。
    2、parse() :  把json字符串解析为js对象。（作用与stringify相反）
*/

    var book = {    //定义一个对象
        title : "Professional JavaScript",
        author : [
            "Nicholas",
            "Jeremy",
            "jeo"
        ],
        edition : 1,
        year : 2007
    };

    /* stringify()方法 */
    var json = JSON.stringify(book);
    console.log(json);

    /* parse()方法 */
    var jsObj = JSON.parse(json);
    console.log(jsObj);