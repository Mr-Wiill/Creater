/*
    Map 类似与json，不同点在于json的key必须是字符串，而map的key可以是任意类型；

    用法：let map = new Map();
         map.set(key,value);    //设置值
         map.get(key);          //获取值
         map.delete(key);       //删除项
         map.has(key);      //判断是否存在
         map.clear();       //清空值

    应用：可以配合for of 和 forEach 使用
*/

/*例1：map的key可以是任意类型，以及方法set(),get(),delete(),has(),clear()*/
let map = new Map();

map.set('a', 'aaa');    //key为string类型
console.log(map);       //输出：Map { 'a' => 'aaa' }

let json={
    a:1,
    b:2
};
map.set(json, 'aaa');   //key为json类型
console.log(map);       //输出：Map { 'a' => 'aaa', { a: 1, b: 2 } => 'aaa' }

map.set(2,'二逗');      //key为number类型
console.log(map);       //输出：Map { 'a' => 'aaa', { a: 1, b: 2 } => 'aaa', 2 => '二逗' }

console.log(map.get(2));    //获取一个值，输出：二逗

map.delete(json);       //删除了json这一项
console.log(map);       //输出：Map { 'a' => 'aaa', 2 => '二逗' }

console.log(map.has(json));     //判断json是否存在，输出：false

map.clear();            //清空map里面的所有值
console.log(map);       //输出：Map {}


/*例2：for of 循环*/
console.log("例2：");
map.set(json,'123456');
map.set('a','apple');
map.set('b','banana');
console.log("-------- for of 默认---------");
for (let [key,value] of map){
    console.log(key,value);
}

console.log("-------- keys()---------");
for (let key of map.keys()){
    console.log(key);
}

console.log("-------- values()---------");
for (let value of map.values()){
    console.log(value);
}

console.log("-------- entries()---------");
for (let [k,v] of map.entries()){
    console.log(k,v);
}

/*例3：forEach循环map*/
console.log("-------- forEach---------");
map.forEach((value,key)=>{
   console.log(value,key);
});