/*判断字符串是否以指定字符开头或结尾*/
/*
    判断开发 ： str.startsWith("指定字符串")  若是返回true，否则返回false
    判断结尾 ： str.endsWith("指定字符串")  若是返回true，否则返回false
*/
let str2 = "https://www.baidu.com";
let str3 = "file:E://GitHub//Cooler";
console.log("判断开头："+str2.startsWith("http"));     //是，输出true
console.log(str3.startsWith("http"));     //否，输出false

console.log("判断结尾："+str2.endsWith("com"));     //是，输出true
console.log(str3.endsWith("com"));      //否，输出false