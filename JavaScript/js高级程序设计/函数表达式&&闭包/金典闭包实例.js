function outer(){
    var result = new Array();
    for(var i = 0; i < 2; i++){     //注：i是outer()的局部变量
        result[i] = function(){
            return i;
        }
    }
    return result;      //返回一个函数对象数组
    //这个时候会初始化result.length个关于内部函数的作用域链
}
var fn = outer();
console.log(fn[0]());    //result：2
console.log(fn[1]());    //result：2

/*更正后*/
function outerFn(){
    var result = new Array();
    for(var i = 0; i < 2; i++){
        //定义一个带参函数
        result[i] = function(num){
            function innerArg(){
                return num;
            }
            return innerArg;
        }(i);//预先执行函数写法
        //把i当成参数传进去
    }
    return result;
}
var fn = new outerFn();
console.log(fn[0]());
console.log(fn[1]());