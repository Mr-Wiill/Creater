/* 
概述：

如图所示，new Vue一个实例对象a，其中有一个属性a.b，那么在实例化的过程中，
通过Object.defineProperty()会对a.b添加getter和setter，
同时Vue.js会对模板做编译，解析生成一个指令对象（这里是v-text指令），每个指令对象都会关联一个Watcher,
当对a.b求值的时候，就会触发它的getter，当修改a.b的值的时候，就会触发它的setter，同时会通知被关联的Watcher，
然后Watcher就会再次对a.b求值，计算对比新旧值，当值改变了，Watcher就会通知到指令，调用指令的update()方法，
由于指令是对DOM的封装，所以就会调用DOM的原生方法去更新视图，这样就完成了数据改变到视图更新的一个自动过程

实现数据双向绑定的方法：

A、发布者-订阅者模式（backbone.js）

思路：使用自定义的data属性，在HTML代码中指明绑定。所有绑定起来的javascript对象以及DOM元素都将订阅一个发布者对象。任何时候如果javascript对象或者一个HTML输入字段被侦测到发生变化，将代理事件变成发布者-订阅者模式，这会反过来变化广播，并传播到所有绑定的javascript对象以及DOM元素上。

B、脏值检查（angular.js）：dirty check   详细讲解链接

angular.js是通过脏值检测的方式，对比数据是否有变更，从而决定是否更新视图。最简单的方式就是通过setInterval()定时轮询检测数据变动。angular.js只有在指定的事件触发时，进入脏值检测，大致如下：

● DOM事件，譬如用户输入文本，点击按钮等（ng-click）

● XHR响应事件（$http）

● 浏览器location变更事件（$location）

● Timer事件（$timeout,$interval）

● 执行$digest()或$apply()

C、数据劫持结合发布者-订阅者模式（vue.js）【vue data是如何实现的？？】

vue.js采用数据劫持结合发布者-订阅者的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时，发布消息给订阅者，触发相应的监听回调。

具体的来讲，Vue.js通过Directives指令去对DOM做封装，当数据发生变化，会通知指令去修改对应的DOM，数据驱动DOM的变化。vue.js还会对操作做一些监听（DOM Listener），当我们修改视图的时候，vue.js监听到这些变化，从而改变数据。这样就形成了数据的双向绑定。

具体步骤如下：

● 首先，需要对observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter  getter。这样的话，给这个对象的某个属性赋值，就会触发setter，那么就能监听到数据变化。（其实是通过Object.defineProperty()实现监听数据变化的）

● 然后，需要compile解析模板指令，将模板中的变量替换成数据，接着初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者。一旦数据有变动，订阅者收到通知，就会更新视图

● 接着，Watcher订阅者是Observer和Compile之间通信的桥梁，主要负责：

         1）在自身实例化时，往属性订阅器（Dep）里面添加自己

         2）自身必须有一个update()方法

         3）待属性变动，dep.notice()通知时，就调用自身的update()方法，并触发Compile中绑定的回调

● 最后，viewmodel(vue实例对象)作为数据绑定的入口，整合Observer、Compile、Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 (ViewModel)-》视图更新(view)；视图变化(view)-》数据(ViewModel)变更的双向绑定效果。

 */

var obj = {};
Object.defineProperty(obj, 'hello', {           //obj---变量名，hello---变量的属性名（任意取名）
  get: function() {
    console.log('get val:'+ value);             //value-（任意取名）--属性“hello”的值
    return value;
 　 },
　　set: function(newVal) {
    value = newVal;
    console.log('set val:'+ value);
  }
});
 
obj.hello='111';
obj.hello;

/* 
    输出：
    set val:111
    get val:111
*/