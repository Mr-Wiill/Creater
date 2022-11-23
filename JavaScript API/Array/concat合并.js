/* 
    concat（）
    在原始数据尾部添加另外数据组成新数据（字符串适用）。
*/

//数组
const a = [1,2,3];
const b = [4,5];
const c = a.concat(b);  // [1, 2, 3, 4, 5]
const d = a.concat(4,5);     // [1, 2, 3, 4, 5]

//字符串
const x = 'abc';
const y = 'def';
const z = x.concat(y); // abcdef

