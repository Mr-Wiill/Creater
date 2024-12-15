/* 
    通过xhr.responseType = "arraybuffer" 指定响应的数据类型
    在onload回调里打印xhr.response
*/

// 前端
const xhr = new XMLHttpRequest();
xhr.open("GET", "ajax", true);
xhr.responseType = "arraybuffer";
xhr.onload = function () {
    console.log(xhr.response)
}
xhr.send();

// Node端
const app = new Koa();
app.use(async (ctx) => {
    if (pathname = '/ajax') {
        ctx.body = 'hello world';
        ctx.status = 200;
    }
}).listen(3000)