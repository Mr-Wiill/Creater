let fs = require('fs')

/* 异步和同步 */

// readFile 异步函数，readFileSync为同步函数
fs.readFile('../static/fs.test.txt', (err, data)=>{
    if (err){
        console.log(err.stack);
        return;
     }
     console.log(data.toString());
})

console.log("程序执行完毕");


/* 打开文件 */

// fs.open(path, flags[, mode], callback)

// path - 文件的路径。

// flags - 文件打开的行为。具体值详见下文。

// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。

// callback - 回调函数，带有两个参数如：callback(err, fd)。


// 异步打开文件
console.log("准备打开文件！");
fs.open('../static/input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});


/* 获取文件信息 */

// fs.stat(path, callback)

// path - 文件路径。

// callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。



/* 写入文件 */

// fs.writeFile(file, data[, options], callback)

// file - 文件名或文件描述符。

// data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。

// options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'

// callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});

// 输出：
// 准备写入文件
// 数据写入成功！
// --------我是分割线-------------
// 读取写入的数据！
// 异步读取文件数据: 我是通 过fs.writeFile 写入文件的内容



/* 读取文件 */

// fs.read(fd, buffer, offset, length, position, callback)

// fd - 通过 fs.open() 方法返回的文件描述符。

// buffer - 数据写入的缓冲区。

// offset - 缓冲区写入的写入偏移量。

// length - 要从文件中读取的字节数。

// position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。

// callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。



/* 关闭文件 */

// fs.close(fd, callback)

// fd - 通过 fs.open() 方法返回的文件描述符。

// callback - 回调函数，没有参数。


/* 截取文件 */

// fs.ftruncate(fd, len, callback)

// fd - 通过 fs.open() 方法返回的文件描述符。

// len - 文件内容截取的长度。

// callback - 回调函数，没有参数。


/* 删除文件 */

// fs.unlink(path, callback)

// path - 文件路径。

// callback - 回调函数，没有参数。



/* 创建目录 */

// fs.mkdir(path[, options], callback)

// path - 文件路径。

// options 参数可以是：
    // recursive - 是否以递归的方式创建目录，默认为 false。
    // mode - 设置目录权限，默认为 0777。

// callback - 回调函数，没有参数。



/* 读取目录 */

// fs.readdir(path, callback)

// path - 文件路径。

// callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。



/* 删除目录 */

// fs.rmdir(path, callback)

// path - 文件路径。

// callback - 回调函数，没有参数。


