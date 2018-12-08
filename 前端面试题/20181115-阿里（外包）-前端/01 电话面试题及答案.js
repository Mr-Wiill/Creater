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


8、项目性能优化


9、项目缓存


10、跨域方式和安全


12、大数据的加减乘除



*/