/*模拟nodeJs读取文件*/

const fs = require("fs");   //引入node的fs模块，可以文件进行操作

/*封装一个promise的异步读取文件的函数*/
const readFile = function (file) {
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{      //读取文件
            if(err)reject(err);     //如果失败，执行reject
            resolve(data);      //否则（成功），执行resolve
        })
    })
};

/*promise*/
readFile('data/aaa.txt').then(res=>{    //fs模块读取的文件是读取它的buffer （缓冲区）；
    console.log(res.toString());     // toString把buffer转成字符串的形式
    return readFile('data/bbb.txt');        //返回去读取bbb
}).then(res=>{
    console.log(res.toString());
    return readFile('data/ccc.txt');
}).then(res=>{
    console.log(res.toString());
});