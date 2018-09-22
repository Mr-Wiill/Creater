/*
    arr.some(回调函数，this指向) ： 类似查找，数组里某一个元素符合条件，就返回true
*/

/*例1*/
let arr = ["apple", "banana", "orange"];
function findInArray(arr,item){
    return arr.some((val,index,array)=>{
        return val == item;
    })
}
console.log(findInArray(arr,"strawberry"));     //arr里不存在strawberry，所有返回false



/*
    arr.every(回调函数，this指向) ： 数组里所有的元素符合条件，才返回true
*/

/*例1：检查数组里是不是所有元素都是奇数*/
let arr1 = [1,3,5,7,9,10];
let odd = arr1.every((value,index,array)=>{
    return value%2 == 1;        //判断arr1里是不是所有元素都是奇数，若是则返回true，否则返回false；
});
console.log(odd);



/*
    总结：
    1、arr.some(回调函数，this指向) 若数组中有一个元素符合条件，则返回true，若所有都不符合则返回false；
    2、arr.every(回调函数，this指向) 若数组中所有的元素都符合条件，则返回true，否则返回false；
    3、some和every都必须有返回值return；
*/