/*
    在ES6之前的模块规范：
            Common.js       服务器端 node.js  用法：require(url)
            AMD             requireJs，curlJs
            CMD             seaJs

    ES6，统一了服务器端和客户端模块规范：
    导出模块 export
    引用模块 import {} from 相对路径或绝对路径

    特点：
    1、需要运行于服务器；
    2、同一个模块如果加载多次只执行一次；
    4、import会提升到顶部，优先执行；（js代码里先执行import模块代码，再执行其他代码）；


    ES6模块与commonJs模块的区别;
    （1）CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用；
    （2）CommonJS模块是运行时加载，ES6模块是编译时输出接口。
    （3）ES6原始值变了，import加载的值也会跟着变；CommonJS里原始值改变后，拷贝的值不会改变；

    js文件异步加载的两种方式：
    （1）<script defer></script>      渲染完再加载（页面渲染完成后再加载js）
    （2）<script async></script>      下载完就加载（页面文件下载完后就加载js，然后接着渲染页面）

    应用：

    动态加载（按需加载）模块：
    结合promise使用
    1）then()方法
    import("模块路径").then(result=>{     //引用之后，在then方法里需要用哪个再调用哪个；
        console.log(result.item);
    })

    2)结合all()和then方法
    Promise.all([
        import('模块路径'),
        import('模块路径'),
        ...
    ]).then(([mod1, mod2,...])=>{
        console.log(mod1);
        console.log(mod2);
        ...
    })

*/



export const a = 12;