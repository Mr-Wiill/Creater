let name = "jack";
let age = 18;
let json = {
    name,       //等同于name : name
    age,        //等同于age : age
    showName(){         //注意不能使用箭头函数
        return this.name;
    },

    /*上面方法等同于下面
    showName: function () {
        return this.name;
    }*/
};
console.log(json.showName());