/**
 * 默认绑定时this指向全局对象（非严格模式），在严格模式下，默认绑定的this指向undefined
 */

// 例1 函数内部嵌套使用this关键字
function fn1() {
    let fn2 = function () {
        console.log('this fn2', this); //window
        fn3();
    };
    console.log('this fn1', this); //window
    fn2();
};
function fn3() {
    console.log('this fn3', this); //window
};
fn1();


// 例2 全局环境中定义person函数，内部使用this关键字
var name = 'Jenny';
function person() {
    return this.name;
}
console.log(person());  //Jenny