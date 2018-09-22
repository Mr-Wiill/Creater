/*
    for(let value of array){}   循环数组
*/

/*例1：循环数组*/
let arr = ["apple", "banana", "orange"];

for (let val of arr){
    console.log(val);       //循环arr数组里的每一项元素
}

for (let index of arr.keys()) {     //keys()返回数组的键（index）
    console.log(index);     //循环arr数组的index
}

/*
for (let elem of arr.values()){    //values()返回数组的值（value）,低版本浏览器不兼容values()
    console.log(elem);
}
*/

for (let keyAndValue of arr.entries()){     //entries()返回数组的键值对（index:element）
    console.log(keyAndValue);
}


/*例2：for of 使用Object.keys(obj)方法遍历对象属性，如果对象的属性是数字，默认对遍历后的属性进行排序*/
console.log("-------例2--------");
let obj = {
    name : 'jack',
    100 : 'aaa',
    1 : 'bbb',
    99 : 'ccc'
};
for (let key of Object.keys(obj)) {
    console.log(key);
}
for (let value of Object.values(obj)) {
    console.log(value);
}
for (let kv of Object.entries(obj)) {
    console.log(kv);
}


/*
    总结：
    1、for of 用于遍历数组的value；
    2、可以添加arr.keys()方法遍历数组的key (结果等同于for in 遍历数组)；
    3、可以添加arr.entries()方法遍历数组的键值对（key:element）;
    4、for in 与 for of 的区别：
       遍历数组：for in 遍历的是key,而for of 遍历的是value;
       遍历对象：for in 遍历对象的所有属性（包括原型链属性），for of 可以使用Object.keys(obj)方法遍历obj对象的属性（不包括原型属性）。
*/