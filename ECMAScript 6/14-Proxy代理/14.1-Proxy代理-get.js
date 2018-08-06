/*
    Proxy代理：扩展（增强）对象的一些功能；（设计模式的一种，代理模式）

    作用：预警、上报、统计、扩展功能、增强对象等等。

    语法：new Proxy(target, handler);      target:被代理的对象，handler:对代理对象做的操作（一个json）；

    handler : {
        set(){},    //设置
        get(){},    //查询
        deleteProperty(){},     //删除
        has(){},    //检查是否存在
        apply(){},      //调用函数
        ...
    }
*/

/*例1 Proxy代理增强对象 : 在访问对象前进行预提示操作*/
let obj ={
    name : 'jack',
    age : 18
};

let newObj = new Proxy(obj, {       //newObj代理了obj，所以newObj有了obj里面的属性和方法
   get(target, property){       //target为代理的对象obj，property为对象的属性name
       console.log(`您访问了${property}属性`);    //预提示操作
       return target[property];             //返回obj的对象
   }
});
console.log(newObj.name);       //访问obj里的属性，有则返回相应的值
console.log(newObj.obj);    //不存在，则返回undefined


/*例2 Proxy代理对象，当访问的对象不存在是，给个提示*/
console.log("-------例2-------");
let newObj1 = new Proxy(obj, {
   get (target,property){
       if (property in target){     //如果target对象里存在property属性
           return target[property];
       } else{
           return `您访问的属性不存在^_^`;
       }
   }
});
console.log(newObj1.name);      //存在
console.log(newObj1.job);       //不存在