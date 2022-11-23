// 首先需要定义一个变量：

const date = new Date();

/* 下面为获取本地时间的方法 */

date   //Wed Mar 02 2022 16:59:55 GMT+0800 (中国标准时间)

date.getDate()  // 一个月中的某一天（1～31）

date.getDay()  // 一周中的某一天（0～6）

date.getMonth()  // 月份（0～11）

date.getFullYear()  // 以四位数字返回年份

date.getHours()  // 小时（0～23）

date.getMinutes()  // 分钟（0～59）

date.getSeconds()  // 秒钟（0～59）

date.getMillseconds()  // 毫秒（0～999）

date.getTime()  // 自 1970/01/01 以来的毫秒数

date.getTimezoneOffset()  // 本地时间与格林威治标准时间（GMT）的分钟差

/* 
date.setDate(): 设置Date对象中月的某一天（1～31）；
date.setMonth(): 设置Date对象中月份（0～11）；
date.setFullYear(): 设置Date对象中的年份（四位数字）；

*/


/* 下面为获取世界标准时间(格林威治时间)的方法 */

date.getUTCDate()  // 一个月中的某一天（1～31）

date.getUTCDay()  // 一周中的某一天（0～6）

date.getUTCMonth()  // 月份（0～11）

date.getUTCFullYear()  // 以四位数字返回年份

date.getUTCHours()  // 小时（0～23）

date.getUTCMinutes()  // 分钟（0～59）

date.getUTCSeconds()  // 秒钟（0～59）

date.getUTCMillseconds()  // 毫秒（0～999）