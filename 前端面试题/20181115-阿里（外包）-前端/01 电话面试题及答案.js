/*  阿里巴巴（外包）前端的电话面试题和答案

1、flex布局
   答案：https://blog.csdn.net/Mr_JavaScript/article/details/84893540

2、js有哪些遍历数组的方法
   ES5方法：
    1）for循环；  通过下标遍历数组的每一项；
    2）array.forEach((item, index, arr)=>{ //等到每一项item })  等同于for；       
    3）array.map((item, index, arr)=>{ return //格式化数组 })    用于格式化数组，返回格式化后的一个数组；如无return，则返回由length个undefined组成的数组；
    4）array.filter(((item, index, arr)=>{ return //判断条件 }))   根据条件过滤元素，返回符合条件的元素组成的一个数组；
    5）array.every(((item, index, arr)=>{ return //判断条件 }))    如果每个元素都符合条件，则返回true，否则返回false；
    5）array.some(((item, index, arr)=>{ return //判断条件 }))    只要有一个元素符合条件，就返回true，否则返回false；
    6）arr.reduce((prev,cur,index,array)=>{}) 从左到右遍历数组，并返回回调函数的值（应用于求和，求幂等）；prev为上一轮函数执行结果（previousResult），cur为当前值(currentValue)
    7）arr.reduceRight((prev,cur,index,array)=>{}) 从右到左遍历数组，并返回回调函数的值；
   ES6方法：
    1）for(let item of arr){ //等到每个元素}
       for(let index of arr.keys()) { //keys()返回数组的键（index）}
       for (let keyAndValue of arr.entries()){  //entries()返回数组的键值对（index:element）}
    2）array.find((val, index, array)=>{ return //条件 }  返回第一个符合条件的元素，如果没找到返回undefined（找到第一个符合条件的元素，则停止遍历）
    3）array.find((val, index, array)=>{ return //条件 }  返回第一个符合条件的元素下标，如果没找到则返回-1（找到第一个符合条件的元素，则停止遍历）

3、箭头函数的特性
   1）箭头函数是匿名函数，自身没有this和arguments，它的this从上下文捕捉而来；
   2）箭头函数不能作为构造函数，和 new 一起用就会抛出错误；
   3）箭头函数没有原型属性（prototype）；
   4）箭头函数不能当做Generator函数,不能使用yield关键字；

4、项目背景
   介绍你做过了哪些项目，这些项目都使用了哪些技术；重点介绍自己实现了哪些模块，有哪些优秀部分，自己有什么收获。

5、MVVM模式介绍
   MVVM 是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定

6、Vue生命周期
   beforeCreate()   创建组件
   created()    创建完成
   beforeMounte()   组件被挂载前
   mounted()    组件挂载完成
   beforeUpdate()   组件更新前
   updated()    组件更新后
   beforeDestory()  组件摧毁前
   destoryed()  组件摧毁后

7、Vue数据双向绑定原理
   vue.js是采用数据劫持结合发布者-订阅者模式的方式实现数据双向绑定，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调，从而更新视图层的数据。
   详细介绍：https://segmentfault.com/a/1190000006599500

8、web项目性能优化

   减少页面体积，提升网络加载：
   1）静态资源压缩合并，如js代码合并，css代码合并，压缩图片等；
   2）静态资源缓存；
   3）使用 CDN 让资源加载更快；

   优化页面渲染：
   1）减少HTTP请求；
   2）减少DOM操作，多个操作尽量合并在一起执行（DocumentFragment）；
   3）懒加载（图片懒加载、下拉加载更多）；
   4）使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间（smarty、Vue SSR）；

9、web缓存
   http请求头缓存
   1）强制缓存：
      第一次请求即把数据缓存起来，在缓存数据未失效的情况下，之后的请求都直接使用缓存数据。
      缓存规则(header里配置) Cache-Control，参数：private（客户端可以缓存），public（客户端和代理服务器都可缓存），max-age=xxx 缓存时长（s），no-cache使用缓存前，再向服务器发送验证请求，no-store禁止缓存

   2）协商缓存：
      第一次请求时拿到缓存数据和缓存标识，再次请求时向服务器发送缓存标识，服务器判断缓存是否有效，若有效则返回304状态码，请求数据从缓存读取，若无效则返回202，需要重新发送http请求数据。
      缓存数据的修改时间(header里配置) Last-Modified（第一次请求） 数据最后修改时间，If-Modified-Since（再次请求）上次请求时的最后修改时间
      缓存标识(header里配置)：Etag（第一次请求）由服务器生成的唯一标识，If-None-Match（再次请求）第一次请求获取的唯一标识

   常用浏览器缓存
   1）Cookie主要用于用户信息的存储，Cookie的内容可以自动在请求的时候被传递给服务器；
   2）LocalStorage的数据将一直保存在浏览器内，直到用户清除浏览器缓存数据为止；
   3）SessionStorage的其他属性同LocalStorage，只不过它的生命周期同标签页的生命周期，当标签页被关闭时，SessionStorage也会被清除；
   4）IndexDB主要用在前端有大容量存储需求的页面上，例如，在线编辑浏览器或者网页邮箱。

10、跨域方式和安全


12、大数据的加减乘除



*/