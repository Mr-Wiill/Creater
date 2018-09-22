/*
    promise.all() 并行执行异步操作（多个同时进行），并在所有异步操作执行完后再执行回调函数
*/

function runAsync1(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = 49;
            if (num <= 50){
                console.log(num);
                resolve("数字合适1");
            } else {
                console.log(num);
                reject("数字过大1");
            }
        },3000);
    });
    return promise;
}

function runAsync2(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = 49;
            if (num <= 50){
                console.log(num);
                resolve("数字合适2");
            } else {
                console.log(num);
                reject("数字过大2");
            }
        },2000);
    });
    return promise;
}

function runAsync3(){
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let num = 49;
            if (num <= 50){
                console.log(num);
                resolve("数字合适3");
            } else {
                console.log(num);
                reject("数字过大3");
            }
        },1000);
    });
    return promise;
}

Promise
    .all([runAsync1(), runAsync2(), runAsync3()])       //同步回调，只返回resolve
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });