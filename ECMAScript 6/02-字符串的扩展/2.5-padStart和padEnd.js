
/*字符串填充*/
/*
    往前填充：str.padStart(填充后字符串长度,"填充的字符串")
    往后填充：str.padEnd(填充后字符串长度,"填充的字符串")
*/
let str = "apple";
let padStr = "xxx";
console.log(str.padStart(str.length+padStr.length, padStr));        //往前填充
console.log(str.padEnd(str.length+padStr.length, padStr));      //往后填充



/*
    总结：
    1、查找字符串：str.includes("查找的字符串")  存在返回true，否则返回false；
    2、判断字符串的开头结尾：str.startsWith("指定开头字符串")、str.startsWith("指定结尾字符串");
    3、重复字符串：str.repeat("字符串");
    4、填充字符串：str.padStart(填充后的总长度,"头部填充的内容")、str.padEnd(填充后的总长度,"尾部填充内容");
*/