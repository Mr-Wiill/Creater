(function () {  //里面包含里私有作用域，当函数执行完毕后，私有变量会被销毁（减少内存浪费）。
    var now = new Date();
    if (now.getMonth() == 0 && now.getDate() ==1){
        console.log("happy new year !");
    }else {
        console.log("Today is "+ now.getMonth()+"月"+(now.getDate()));
    }
})();