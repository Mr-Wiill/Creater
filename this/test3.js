let name = 'finget'
let obj = {
    name: 'FinGet',
    getName: function () {
        alert(this.name);
    }
}
obj.getName(); // FinGet

let fn = obj.getName;   // 定义一个全局对象
fn();   //  finget this -> window

/*
对象中的方法，该方法被哪个对象调用了，那么方法中的this就指向该对象
*/