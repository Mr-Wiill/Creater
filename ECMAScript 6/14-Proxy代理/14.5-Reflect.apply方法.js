/*
    //apply拦截函数
    new Proxy(target, {
        apply(target,context,arguments){     //target拦截的函数，context为执行环境，arguments为传入的参数
            return Reflect.apply(...arguments);     //调用拦截的函数，并执行结果
        }
    })

    Reflect.apply方法的作用等效于fn().apply(调用函数,this指向,参数数组);
*/
function sum(a,b) {
    return a+b;
}
let newFn = new Proxy(sum, {
    apply(target,context,args){
        console.log(...arguments);
        return Reflect.apply(...arguments);     //调用sum函数，并返回计算结果
    }
});

console.log(newFn(2,3));        //输出：5