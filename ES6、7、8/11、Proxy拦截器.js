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


/* 1、Proxy 支持的拦截操作一览，一共 13 种。 */
let obj = {
    name: 'jack'
}
let person = new Proxy(obj, {
    // get(target, propKey, receiver)：拦截对象属性的读取
    get(target, propKey) {
        if (propKey in target) {
          return target[propKey];
        } else {
          throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
        }
    },
    // proxy.name // "张三"
    // proxy.age // 抛出一个错误

    // set(target, propKey, value, receiver)：拦截对象属性的设置，返回一个布尔值。
    set(target, propKey, value) {
        if (propKey === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        target[propKey] = value;    // 对于满足条件的 age 属性以及其他属性，直接保存
        return true;
    },
    // person.age = 100;    设置成功返回true

    // apply(target, object, args)：拦截 Proxy 实例作为函数调用的、call和apply操作。
    apply () {
        return 'I am the proxy';
    },

    // has()方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。
    has (target, key) {
        if (key[0] === '_') {
          return false;
        }
        return key in target;
    },

    // construct()方法用于拦截new命令
    construct (target, args, newTarget) {
        return new target(...args);
    },

    //deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
    deleteProperty (target, key) {
        delete target[key];
        return true;
    },
    
    // defineProperty()方法拦截了Object.defineProperty()操作。
    defineProperty (target, key, descriptor) {
        return false;   //内部没有任何操作，只返回false，导致添加新属性总是无效。
    },

    // getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
    getOwnPropertyDescriptor (target, key) {
        if (key[0] === '_') {
          return;
        }
        return Object.getOwnPropertyDescriptor(target, key);
    },

    // getPrototypeOf()方法拦截Object.getPrototypeOf()。
    getPrototypeOf(target) {
        return obj;
    },

    // isExtensible()方法拦截Object.isExtensible()操作。该方法只能返回布尔值，否则返回值会被自动转为布尔值。
    isExtensible (target) {
        console.log("called");
        return true;
    },

    /* 
    ownKeys()方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。
        Object.getOwnPropertyNames()
        Object.getOwnPropertySymbols()
        Object.keys()
        for...in循环
    */
    ownKeys (target) {
        return Reflect.ownKeys(target).filter(key => key[0] !== '_');
    },

    // preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
    preventExtensions: function(target) {
        return true;
    },

    // setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。
    setPrototypeOf (target, proto) {
        throw new Error('Changing the prototype is forbidden');
    }     

})


/* 2、new Proxy(target, handler) */

let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
proxy.foo // 123

revoke();
proxy.foo // TypeError: Revoked