/* 
    Buffer是Node.js提供的对象，前端没有。 
    它一般应用于IO操作，例如接收前端请求数据时候，可以通过以下的Buffer的API对接收到的前端数据进行整合。
*/

// Node端（Koa）
const app = new Koa();
app.use(async (ctx, next) => {
    if (ctx.path === '/ajax') {
        const chunks = [];
        const req = ctx.req;
        req.on('data', buf => {
            chunks.push(buf);
        })
        req.on('end', () => {
            let buffer = Buffer.concat(chunks);
            console.log(buffer.toString())
        })
    }
});
app.listen(3000)


// 前端
const xhr = new XMLHttpRequest();
xhr.open("POST", "ajax", true);
xhr.setRequestHeader('Content-Type', 'text/plain')
xhr.send("asdasdsadfsdfsadasdas");