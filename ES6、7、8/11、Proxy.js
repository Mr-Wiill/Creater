/* 
    0、Proxy
    Proxy在目标对象之前架设一层“拦截”，可以对外界的访问进行过滤和改写。
    var proxy = new Proxy(target, handler);
    target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

    1、Proxy 支持的拦截操作一览，一共 13 种。
    get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
    deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
    ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
    getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
    getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
    isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
    setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

    2、new Proxy(target, handler)
    Proxy.revocable()方法返回一个可取消的 Proxy 实例。

*/

/* 0、new Proxy(target, handler) */
var proxy = new Proxy({}, {
    get: function (target, propKey) {
        return 35;
    }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35


/* 2、new Proxy(target, handler) */

let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked