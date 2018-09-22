/*
    new Promise(function(resolve, reject){})    处理异步操作的层层回调问题
    参数：resolve为执行成功后的回调函数，reject为执行失败后的回调函数。

    原理：把原来的回调写法分离出来（异步操作与回调处理分离），在异步操作执行完后，用链式调用的方式执行回调函数。

    promise.then()  异步操作执行完后，调用then方法来执行回调函数。
*/

/*例1：一个简单的promise函数*/
function runAsync1() {           //异步操作封装函数
    let a = 9;
    let promise = new Promise(function (resolve, reject) {
        if (a>=10){
            resolve("success");      //成功的回调函数
        }  else{
            reject("fail");          //失败的回调函数
        }
    });
    return promise;
}
// promise.then(success, fail);
runAsync1()
    .then(      //异步操作后执行回调函数
        result=>{
            console.log(result);        //result为异步成功执行后传来的参数，即success
        },
        error=>{
            console.log(error);         //error为异步执行失败后传过来的参数，即fail
        }
    );



/*例2：链式操作用法（多个异常操作）*/
function runAsync2() {
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.ceil(Math.random()*10);      //随机生成1-10的数
            if (num <=5){
                console.log(num);
                resolve("数字合适");
            } else{
                console.log(num);
                reject("数字太大");
            }
        },2000);
    });
    return p;
}
runAsync1()
    .then(                      //runAsync1异步操作的异常处理
        (result)=>{
            console.log(result);
            return runAsync2();
        },
        (error)=>{
            console.log(error);
            return runAsync2();
        }
    )
    .then(                      //runAsync2异步操作的异常处理
        (res)=>{
            console.log(res);
        },
        (err)=>{
            console.log(err)
        }
    );


/*
    总结：
    1、new Promise(function(resolve, reject){})  用于处理多异步操作回调的问题，resolve为异步成功后回调函数，reject为异步失败后回调函数；
    2、一般情况都会把异步操作封装起来调用（遍历执行回调函数）；
    3、promise.then() 用于接收异步操作的返回值并执行相应的回调函数；
*/