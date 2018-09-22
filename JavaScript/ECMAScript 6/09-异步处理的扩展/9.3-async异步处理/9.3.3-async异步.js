/*
    语法：async function fn(){     //async表示异步，这个函数里面有异步操作
            await promise对象;    //await等待一个Promise
        }

    特点：1、await只能放到async函数中；
         2、相比generator语义化更强；
         3、await后面可以是一个promise对象，也可以是数字、字符串、布尔...；
         4、async函数返回一个promise对象；
         5、只要await语句后面的promise状态变成reject，那么整个async函数会中断执行；

    应用：1、配合try{}catch(){}方法使用来处理抛出的错误；
         2、配合promise的all，并行执行；
*/


const fs = require('fs');
const readFile = function (file) {
    return new Promise((resolve, reject)=>{
        fs.readFile(file,(err,data)=>{
            if (err) reject(err);
            resolve(data);
        })
    })
};

/*例1：async函数*/
/*
async function fn() {
    console.log("例1：");
    let f1 = await readFile('data/aaa.txt');
    console.log(f1.toString());
    let f2 = await readFile('data/bbb.txt');
    console.log(f2.toString());
    let f3 = await readFile('data/ccc.txt');
    console.log(f3.toString());
}
fn();
*/

/*例2：捕捉async函数的错误*/
async function f() {
    let f1,f2,f3;
    try{
        f1 = await readFile('data/aaa.txt');
        f2 = await readFile('data/bbb.txt');
        f3 = await readFile('data/ccc.txt');
    }catch(e){}
    console.log("例2：");
    console.log(f1.toString());
    console.log(f2.toString());
    console.log(f3.toString());
}
f();


/*例3：配合promise的all*/
async function f1() {
    let [a,b,c] = await Promise.all([
        readFile('data/aaa.txt'),
        readFile('data/bbb.txt'),
        readFile('data/ccc.txt')
    ]);
    console.log("例3：");
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}
f1();