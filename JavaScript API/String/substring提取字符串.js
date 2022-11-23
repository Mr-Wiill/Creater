/* 
substring（）
用于提取字符串中两个指定索引号之间的字符。(与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。)

*/

const str = 'hello guys';
console.log(str.substring(2))   // llo guys
console.log(str.substring(2, 7))  //  llo g
