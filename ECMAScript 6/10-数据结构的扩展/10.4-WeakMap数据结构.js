/*
    WeakMap具有Map一样的方法

    相比于Map，WeakMap的key只能是对象；
*/

let wMap = new WeakMap();
let json = {
    a:1,
    b:2
};
wMap.set(json, 'aaaaaa');
console.log(wMap);