/*
    普通函数调用：fn();
    标签函数的调用：fn`参数`;
*/

function fn(args) {
    return args[0].toUpperCase();   //转大写
}
console.log(fn`welcome`);