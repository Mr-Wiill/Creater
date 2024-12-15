/**
 * 闭包
 * 作用：在一个内层函数中访问到其外层函数的作用域
 * 使用场景：1、创建私有变量；2、延长变量的生命周期。
 */

// 例1，闭包函数
function init() {
    var name = "Mozilla";       // name 是一个被 init 创建的局部变量
    function displayName() {    // displayName() 是内部函数，一个闭包
        alert(name);            // 使用了父函数中声明的变量
    }
    displayName();
}
init();


// 例2 ，创建私有变量
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
}
var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value());  /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value());  /* logs 2 */
Counter1.decrement();
console.log(Counter1.value());  /* logs 1 */
console.log(Counter2.value());  /* logs 0 */


// 例2，延长变量的生命周期（柯里化函数）

// 假设我们有一个求长方形面积的函数
function getArea1(width, height) {
    return width * height
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea1(10, 20)
const area2 = getArea1(10, 30)
const area3 = getArea1(10, 40)

// 我们可以使用闭包柯里化这个计算面积的函数
function getArea2(width) {
    return height => {
        return width * height
    }
}

const getTenWidthArea = getArea2(10)
// 之后碰到宽度为10的长方形就可以这样计算面积
const area4 = getTenWidthArea(20)

// 而且如果遇到宽度偶尔变化也可以轻松复用
const getTwentyWidthArea = getArea2(20)
