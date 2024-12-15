/* 
A instanceof B判断数据类型的原理
判断A的原型链上是否存在B的原型
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