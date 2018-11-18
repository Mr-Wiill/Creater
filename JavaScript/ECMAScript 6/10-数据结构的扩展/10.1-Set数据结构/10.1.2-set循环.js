/*
    set数据结构像数组一样，可以配合for of 和forEach 使用。
*/

/*例1;使用for of 对set循环遍历*/
console.log("例1：");
let setArr3 = new Set(['a','b','c','d']);
for (let item of setArr3){  //默认输出value
    console.log(item);      //输出：a b c d
}

console.log("------ keys()分隔线 -------");
for (let key of setArr3.keys()){
    console.log(key);       //输出：a b c d
}

console.log("------ values()分隔线 -------");
for (let value of setArr3.values()){
    console.log(value);     //输出：a b c d
}

console.log("------ entries()分隔线 -------");
for (let [k,v] of setArr3.entries()){
    console.log(k,v);
}


/*例2：forEach循环set*/
console.log("例2：");
setArr3.forEach((value, index)=>{
    console.log(value,index);
});

