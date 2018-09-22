/*
    for(变量 in 数组或对象){
        执行语句              //用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
    }

    参数：“变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。
*/

/*例1：遍历数组keys*/
let arr = ["apple", "banana", "orange"];
for (let index in arr) {            //for in 遍历的是数组的index
    console.log(index);
}


/*例2：遍历对象属性*/
let obj = {
    name: "jack",
    age: 18,
    sayName: ()=>{
        console.log(this.name);
    }
};
for (let item in obj){
    console.log(item);
}



/*
    总结：
    1、for in 可以用于循环遍历数组的key 和 循环遍历对象的属性；
    2、for in 与 for of 的区别：
       遍历数组：for in 遍历的是key,而for of 遍历的是value;
       遍历对象：for in 遍历对象的属性，for of 不能遍历对象;
*/