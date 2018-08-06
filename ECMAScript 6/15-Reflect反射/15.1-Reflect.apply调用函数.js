/*
    Reflect.apply方法的作用等效于fn().apply(调用函数,this指向,参数数组);
*/

/*例1*/
console.log(Math.ceil(9.8));        //输出：10

let ref = Reflect.apply(Math.ceil, null, [9.8]);    //输出：10
console.log(ref);


/*例2*/
console.log("-------例2--------");
function show(...args) {
    console.log(this);
    console.log(args);
}
/*调用函数的方法*/
show.call('aaa', 1,2,3,4);          //this指向'aaa', args等于[ 1, 2, 3, 4 ]
show.apply('bbb', [5,6,7,8]);       //this指向'bbb', args等于[ 5, 6, 7, 8 ]
Reflect.apply(show,'abcd',[11,22,33]);      //this指向'abcd', args等于[ 11, 22, 33 ]
