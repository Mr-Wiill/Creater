/* 
    0、Promise异步编程
    Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
    Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。

    1、Promise对象的API
    Promise.prototype.then()
    // then方法是定义在原型对象Promise.prototype上的。
    // 它的作用是为 Promise 实例添加状态改变时的回调函数。
    // 前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。

    Promise.prototype.catch()
    // catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
    // 如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。
    // 另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。
    // 一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

    Promise.prototype.finally() 
    // finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

    Promise.all()
    // all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
    // const p = Promise.all([p1, p2, p3]);
    //（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
    //（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

    Promise.race()
    // race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
    // const p = Promise.race([p1, p2, p3]);
    // 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

    Promise.allSettled()
    // allSettled方法，用来确定一组异步操作是否都结束了（不管成功或失败）。
    // Promise.allSettled()的状态只可能变成fulfilled。

    Promise.any() 
    // 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；
    // 如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

    Promise.resolve() 
    // 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。

    Promise.reject()
    // Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。

    Promise.try()
    // 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。
    // 因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。  
*/

/* 0、定义一个简单的Promise */
const promise = new Promise(function(resolve, reject) {
    // ... some code
  
    if (/* 异步操作成功 */){
      resolve(value);
    } else {
      reject(error);
    }
});


/* 1、Promise对象的API */

// Promise.allSettled()
const promises = [
    fetch('/api-1'),
    fetch('/api-2'),
    fetch('/api-3'),
];
await Promise.allSettled(promises);
removeLoadingIndicator();
// 上面示例中，数组promises包含了三个请求，只有等到这三个请求都结束了（不管请求成功还是失败），removeLoadingIndicator()才会执行。


const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]


// Promise.resolve() 
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))


// Promise.reject()
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了


/* Promise.try() */
// 一般方法database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），这时你就不得不用try...catch去捕获。
try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}

// ES6方法
Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)




