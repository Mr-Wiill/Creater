/*
    1、string.includes(str,startIndex); 返回布尔值，表示是否找到参数字符串；

    2、string.startsWith(str,startIndex); 返回布尔值，表示参数字符串是否在源字符串的开头；

    3、string.endsWith(str,number); 返回布尔值，表示参数字符串是否在源字符串的开头；

      str：必选，参数字符串；
      StartIndex：可选，开始搜索的位置；
      number：可选，字符串的前number个字符；

    4、string.repeat(n); 返回一个新字符串，表示将原字符串重复n次；
       注意：1）如果参数n是小数，会被向下取整（0-1的小数等同于0）；
            2）如果参数n是负数或Infinity，会报错；

    5、补全字符串的方法：
       5.1、string.padStart(length,str);  用于头部补全，并返回新字符串；
       5.2、string.padEnd(length,str);  用于尾部补全，并返回新字符串；
       length：可选，补全后的长度；
       str：必选，用于补全的字符串；
       注意：1）如果补全后的字符串长度超过指定的最小长度，则会截取超出位数的补全字符串；
            2）如果第二个参数为空，则用空格补全；
            3）如果指定的最校长度小于原字符串长度，则输出元字符串；
*/

/*例1 includes()查找字符串，startWith()查找头部字符串，endsWith()查找尾部字符串*/
let str1 = 'hello world!';
console.log(str1.includes("o"));    //true
console.log(str1.startsWith('h'));   //true
console.log(str1.endsWith('!'));         //true


/*例2 repeat()重复字符串*/
let str2 = 'hello，';
console.log(str2.repeat(3));     //hello，hello，hello，
console.log(str2.repeat(2.4));   //hello，hello，
console.log(str2.repeat(0.5));   //输出空格



/*例3 padStart()头部补全，padEnd()尾部补全*/
let str3 = 'myGod';
console.log(str3.padStart(10,'-'));     //-----myGod
console.log(str3.padEnd(10,'-'));       //myGod-----

console.log(str3.padStart(5,'---'));    //myGod，最小长度小于原字符串长度，则输出原字符串
console.log(str3.padEnd(6,'---'));      //myGod-，补全后的长度超过最小长度,则会截取超出位数的补全字符串；
console.log(str3.padStart(-5,'---'));   //myGod

console.log(str3.padStart(8));      //   myGod，没有输入填充的字符串，则用空格填充；