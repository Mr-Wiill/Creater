/* 
    依次处理数组的每个成员，最终累计成一个值。
    格式：reduce(() => (pre, cur, curIndex, arr), initialValue)
    pre:必填，累计变量；cur：必填，当前变量；curIndex: 可选，当前位置； arr:可选，原数组; initialValue: 传递给函数的初始值。


    reduceRight（）
    与reduce方法使用方式相同，区别在于reduceRight方法从右到左执行（例子略过）。
*/

//简单用法
const arr = [3,4,4,5,4,6,5,7];
const a = arr.reduce((pre, cur) => {return pre+cur})
// 逗号写法
// const a = arr.reduce((pre, cur) => (sum= pre+cur, sum))
console.log(a) // 38

//高级用法（举个数组去重和数组扁平化栗子）
const b = arr.reduce((pre, cur) => {
    if(!pre.includes(cur)) {
        return pre.concat(cur)
    } else {
        return pre
    }
}, [])
// [3, 4, 5, 6, 7]

const arrs = [[2,3,2], [3,4,5]]
const c = arr.reduce((pre, cur) => {
    return pre.concat(cur)
}, [])
// [2, 3, 2, 3, 4, 5] 
