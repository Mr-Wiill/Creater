/**
 * 箭头函数中没有this，箭头函数的this指向取决于外层作用域中的this，外层作用域或函数的this指向谁，箭头函数中的this便指向谁。
 */

// 例1 
function fn() {
    return () => {
        console.log(this.name);
    };
}
let obj1 = {
    name: '听风是风'
};
let obj2 = {
    name: '时间跳跃'
};
let zoo = fn()  // fn this指向window
zoo()

let bar = fn.call(obj1); // fn this指向obj1
bar.call(obj2);     // 听风是风

/**
 * 第一次绑定this并返回箭头函数后，再次改变this指向没生效呢
 * 箭头函数的this取决于外层作用域的this，fn函数执行时this指向了obj1，所以箭头函数的this也指向obj1
 * 箭头函数this还有一个特性，那就是一旦箭头函数的this绑定成功，也无法被再次修改
 */

// 特例1 绑定事件监听函数如是箭头函数，则它的this指向window，
const button = document.getElementById('mngb');
button.addEventListener('click', function () {
    console.log(this === window) // false，this指向button
    this.innerHTML = 'clicked button'
})
button.addEventListener('click', () => {
    console.log(this === window) // true
    this.innerHTML = 'clicked button'
})