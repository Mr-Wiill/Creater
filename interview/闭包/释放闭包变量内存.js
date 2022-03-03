function f() {
    let value = 0;
    return {
        add: function () {
            console.log(++value);
        },
        clear: function () {
            value = null
        }
    }
}
const fn = f()
fn.add()    // 获取闭包函数变量
fn.clear()  // 释放闭包变量内存