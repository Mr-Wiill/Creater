/* 
A instanceof B判断数据类型的原理
判断A的原型是否在B的原型链上 
*/
function instanceof(A, B) {
    let left = A.__proto__
    let right = B.prototype
    while (true) {
        if (left == null) return false
        if (left == right) return true
        left = left.__proto__
    }
}