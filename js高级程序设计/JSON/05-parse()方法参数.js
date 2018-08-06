/*
    JSON.parse()可以传一个参数，即还原函数（按条件把json字符串还原成js对象）
*/

var book = {    //定义一个对象
    title : "Professional JavaScript",
    author : [
        "Nicholas",
        "Jeremy",
        "jeo"
    ],
    edition : 1,
    year : 2007,
    releaseDate : new Date(2011, 11, 1)
};
console.log(book.releaseDate);

var jsonText = JSON.stringify(book);    //对象转json

var bookCopy = JSON.parse(jsonText, function (key, value) {     //给parse添加一个还原函数
    if (key == "releaseDate") {
        return new Date(value);
    }else {
        return value;
    }

});
console.log(bookCopy);
console.log(bookCopy.releaseDate);
console.log(bookCopy.releaseDate.getFullYear());