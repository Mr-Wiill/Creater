/*
    Object.keys(obj)    循环对象并返回属性（key）数组
    Object.values(obj)  循环对象并返回值（value）数组
    Object.entries(obj) 循环对象并返回键值对（index:value）数组
*/
/*例1：for 遍历对象*/
let {keys, values, entries} = Object;   //解构赋值
let json = {
    a: 1,
    b: 2,
    c: 3
};
for (let key of keys(json)){  //结构赋值后 keys = Object.keys
    console.log(key);   //json的属性
}

for (let value of values(json)){    // values = Object.values
    console.log(value); //json属性的值
}

for (let item of entries(json)){    // entries = Object.entries
    console.log(item);  //json属性和对应的值
}

/*例2：Object.keys/values/entries() 返回的是一个数组*/
console.log("--------例2--------");
let objKeys = Object.keys(json);
let objValues = Object.values(json);
let objEntries = Object.entries(json);
console.log(objKeys);
console.log(objValues);
console.log(objEntries);