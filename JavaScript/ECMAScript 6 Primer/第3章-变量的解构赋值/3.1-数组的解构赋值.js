/*
    数组的结构赋值：
    1）只要等号两边的模式相同，左边的变量就会被赋予相应的值；
    2）解构不成功，变量的值就等于undefined；
    3）如果等号右边不是数组，报错；
    4）Set数据结构也可以解构赋值；
    5）只要某种数据结构具有Iterator接口，都可以采用数组形式解构赋值；
*/

/*例1：基本结构赋值*/
let [foo, [[bar],baz]] = [1, [[2], 3]];
console.log(foo, bar, baz);     //1 2 3


/*例2 赋值不成功，变量的值等于undefined*/
let [foo1] = [];
let [foo2, bar2] = [1];
console.log(foo1);      //undefined
console.log(bar2);      //undefined


/*例3 等号右边不是数组，报错*/
// let [foo3] = 1;
// let [foo3] = false;
// let [foo3] = NaN;
// let [foo3] = undefined;
// let [foo3] = null;
// let [foo3] = {};


/*例4 Set数据结构解构赋值*/
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x, y, z);   //a b c


/*例5 generator函数的结构赋值*/
function * fibs() {
    let a = 0;
    let b = 1;
    while (true){
        yield a;
        [a, b] = [b, a+b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first);     //0
console.log(second);    //1
console.log(third);     //1
console.log(fourth);    //2
console.log(fifth);     //3
console.log(sixth);     //5