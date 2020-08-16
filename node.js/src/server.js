let http = require('http')
let url = require('url')

let server = (route)=>{
    // 创建一个服务器
    http.createServer((request, response)=>{
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.")

        route(pathname);

        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        response.write("Hello World");
        response.end();

    }).listen(8888)         // 监听8888端口

    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
}

exports.server = server 