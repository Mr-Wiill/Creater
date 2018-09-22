/*
    async函数里，只要await语句后面的promise状态变成reject，那么整个async函数会中断执行；

    解决办法：1、try{}catch(){} 方法解决；
            2、promise自身的catch捕捉错误；

*/

/*例1：async抛出错误，并捕捉错误*/
/*
async function fn() {
    throw new Error("抛出一个error");       //抛出一个错误
}
fn().then(resolve=>{
    console.log(resolve);
}).catch(error=>{            //错误捕捉
    console.log(error);
});
*/


/*例2：async函数返回reject的promise状态*/
/*
async function f() {
    let f1 = await Promise.resolve("success");  //执行
    console.log(f1);
    await Promise.reject("例2抛出一个错误");             //当await等待的promise为reject时，终止async函数
    let f2 = await Promise.resolve("success");  //不执行
    console.log(f2);
}
f().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});
*/


/*例3：try{}catch(){}方法解决sync抛出错误*/
async function f() {
    let f1 = await Promise.resolve("success");  //执行
    console.log(f1);

    try{
        await Promise.reject("例3抛出一个错误");     //无影响
    }catch(e){}

    let f2 = await Promise.resolve("success");  //执行
    console.log(f2);
}
f().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});



/*例4：promise自身的catch捕捉错误*/
/*
async function f() {
    let f1 = await Promise.resolve("success");  //执行
    console.log(f1);

    await Promise.reject("例4输出一个错误").catch(err=>{     //catch捕捉错误并抛出
        console.log(err);
    });

    let f2 = await Promise.resolve("success");  //执行
    console.log(f2);
}
f().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});
*/

/*
    总结：
    1、async函数里，当await里的状态是reject时，会终止async函数；
    2、解决办法有：1、try{}catch(){}方法捕捉；（常用）2、使用promise自身的catch捕捉；
*/