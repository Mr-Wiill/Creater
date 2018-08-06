/*
    promise.catch()  专门用于捕获错误并执行失败的回调函数，等效于then()里面的失败的回调函数；
*/

/*例1*/
function runAsync(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = Math.ceil(Math.random()*100);
            if (num <= 50){
                console.log(num);
                resolve("数字合适");
            } else {
                console.log(num);
                reject("数字过大");
            }
        },1000);
    });
    return promise;
}

runAsync()
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });


/*
    总结：
    1、promise.catch() 用于捕获异步执行失败的错误，以及回调函数里的错误；
    2、promise.then() 捕获的错误是就近捕获（只捕获异步操作的错误），而promise.catch() 是全局捕获（既捕获异步操作错误，又捕获回调函数的错误）；
*/