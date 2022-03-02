/* 
indexOf（）
返回给定元素在数组中的第一次出现的位置，如果没有则返回-1(同样适用于字符串)。

*/

//数组
const arr = [3,4,4,5,4,6,5,7];
console.log(arr.indexOf(4)) // 1
console.log(arr.indexOf('4'))  // -1

//字符串
const string = 'asdfghj';
console.log(string.indexOf('a')) // 0


/* 
lastIndexOf（）
返回给定元素在数组中最后一次出现的位置，没有返回-1(同样适用于字符串)。

*/
console.log(arr.lastIndexOf(4)) 
// 4(从左到右数最后出现的位置，字符串同理)
