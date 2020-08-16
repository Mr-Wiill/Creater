// Stream 有四种流类型：

// Readable - 可读操作。

// Writable - 可写操作。

// Duplex - 可读可写操作.

// Transform - 操作被写入数据，然后读出结果。



//  Stream 对象都是 EventEmitter 的实例。常用的事件有：

// data - 当有数据可读时触发。

// end - 没有更多的数据可读时触发。

// error - 在接收和写入过程中发生错误时触发。

// finish - 所有数据已被写入到底层系统时触发。



/* 从流中读取数据 */

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('../static/fs.test.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 输出：
// 程序执行完毕
// 菜鸟教程官网地址：www.runoob.com


/* 写入流 */

var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 输出：
// 程序执行完毕
// 写入完成。


/* 管道流 */
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('../static/input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('../static/output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");


/* 链式流 */
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('../static/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../static/input.txt.gz'));

// 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('../static/input.txt.gz')
// .pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('../static/input.txt'));
  
console.log("文件压缩完成。");