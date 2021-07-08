console.log(undefined == null);     // true

// 考察typeof
console.log(typeof null)    // object

// 考察setTimeout用法
function checkState() {
    alert("liyuming");
}
window.setTimeout(checkState(), 10000); //立即被调用 
window.setTimeout(checkState, 10000); // 10s后被调用 
window.setTimeout("checkState()", 10000); //10s后被调用 注意和第一个的区别 有引号

// 什么是链式作用域？