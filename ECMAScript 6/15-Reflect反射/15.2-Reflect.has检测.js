/*
    Reflect.has(对象, 检测的东西);  用于检测对象中是否存在检测的东西（属性、方法...），返回true or false

    等效于 "检测的东西" in obj
*/

console.log('assign' in Object);    //true

console.log(Reflect.has(Object, 'assign'));        //true