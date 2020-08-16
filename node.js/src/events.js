// 引入 events 模块
let events = require('events')
// 创建 eventEmitter 对象
let eventEmitter = new events.EventEmitter()

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
   
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
 }

 // 绑定 connection 事件处理程序
 eventEmitter.on('connection', connectHandler)

 // 使用匿名函数绑定 data_received 事件(自定义注册事件)
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });

 // 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");


// eventEmitter提供的方法有

// 1、addListener(event, listener)，为指定事件添加一个监听器到监听器数组的尾部。
// 2、on(event, listener)，为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// 3、once(event, listener)，为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
// 4、removeListener(event, listener)，移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 5、removeAllListeners([event])，移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
// 6、setMaxListeners(n)，用于提高监听器的默认限制的数量。用于提高监听器的默认限制的数量。
// 7、listeners(event)，返回指定事件的监听器数组。
// 8、emit(event, [arg1], [arg2], [...])，按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。