/* 
    slice（start, end）
    参数说明：start和end分别代表提取的下标
    用于提取原来数组的一部分，会返回一个提取的新数组，原数组不变（字符串适用,不包括end)。
*/

//数组
const arr = [3,4,4,5,4,6,5,7];
const a = arr.slice(2, 5); // [4, 5, 4]

//字符串
const x = 'abcdefgh';
const y = x.slice(3, 6); // def



