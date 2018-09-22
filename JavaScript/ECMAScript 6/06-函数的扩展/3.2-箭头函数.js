/*
    箭头函数：
    函数名() => {
       语句
       return
    }
*/

/*例1:只要返回值的箭头函数*/
let show = (a, b) => a+b;       // => 前面为函数名，后面为返回值
console.log(show(1,2));

/*上面代码等同于下面函数*/

function f(a,b) {
    return a+b;
}
console.log(f(1,2));


/*例2:有语句的箭头函数*/
let fn=(a=2,b=3)=> {
    console.log(a,b);
    return a+b;
};
console.log(fn());


/*例3：箭头函数里的this指向*/
/*
    箭头函数自身没有this，它的this是继承而来，所以箭头函数的this指向它的宿主对象。
*/
let name = "window";
let json = {
    name : "json",
    show : function () {
        setTimeout(function () {
            console.log(this.name);       //普通函数，此时this指向window，输出undefined。 why？？？
        },1000);
    },
    sayName : function () {
        setTimeout(()=>{
          console.log(this.name);         //箭头函数的宿主函数是sayId，sayId里的this指向json，输出1111
        },2000);
    }
};
json.show();
json.sayName();


/*例4 箭头函数没有arguments*/
/*
let arg = ()=> {
    console.log(arguments);     //报错
};
arg(1,23,5,4,6);
*/
/*可以使用三点运算符代替arguments*/
let arg = (...arr)=> {
    console.log(arr);
};
arg(1,2,3,4,5,6);



/*例5 箭头函数不能用做构造函数*/
/*
let say = ()=> {
    this.name = "箭头函数";         //报错，
};
let s = new say();
console.log(s.name);
*/



/*
    总结：
    1、箭头函数： 函数名（）=> { 语句 };
    2、箭头函数自身没有this，其this是继承来的，所以箭头函数的this指向它的宿主函数；
    3、箭头函数没有arguments；
    4、箭头函数不能用做构造函数；
*/