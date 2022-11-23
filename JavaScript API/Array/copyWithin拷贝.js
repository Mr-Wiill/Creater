/* 
copyWithin（）
从数组的指定位置拷贝元素到数组的另一个指定位置中。

格式： array.copyWithin(target, start, end)
target 必需 拷贝至的目标位置
start 可选  开始拷贝的下标，不传则从头开始拷贝
end 可选  结束拷贝的下标
*/

const arr = [3,4,4,5,4,6,5,7];
console.log(arr.copyWithin(4,2)) // [3, 4, 4, 5, 4, 5, 4, 6]
