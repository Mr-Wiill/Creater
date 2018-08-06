/*
    JSON.stringify() 方法可添加两个参数 1)过滤器（数组或函数）； 2)缩进值（数字表示空格/字符串）；
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

/* 过滤器为数组 */
var json_Arr = JSON.stringify(book, ["title", "author"]);       //只把title和author序列化为json
console.log(json_Arr);

/* 过滤器为函数 */
var json_fn = JSON.stringify(book, function (key, value) {      //根据函数条件序列化
    switch (key){
        case "author" :
            return value.join(",");
        case "year" :
            return 2018;
        case "edition" :
            return undefined;
        default :
            return value;
    }
});
console.log(json_fn);

/* 字符串缩进 */
var json_ = JSON.stringify(book, null, 4);
console.log(json_);

var json_2 = JSON.stringify(book, null, "--");
console.log(json_2);