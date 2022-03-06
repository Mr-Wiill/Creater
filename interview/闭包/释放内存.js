function f() {
    let value = 123;
    return function () {
        alert(value);
    }
}

let g = f(); // 当 g 函数存在时，该值会一直被保留在内存中

g = null; // ……现在内存被清理了