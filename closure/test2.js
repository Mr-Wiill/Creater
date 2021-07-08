function addCount(){
	var count = 0;
	return function(){
		count += 1;
		console.log(count);
	}
}
var fun1 = addCount();
var fun2 = addCount();
fun1();//1
fun1();//2
fun1();//3
fun2();//1
fun2();//2


/* 
这个例子呢，跟第一个也算是差不多的，就是在返回函数中做了一个递增并打印的操作，把addCount的返回函数给到fun1和fun2，当我向上面代码一样调用的时候呢，就会发现替他打印的不是12345，而是12312，那这是什么原因呢，这就回到了上边介绍的那句话：每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址。所以说虽然fun1和fun2都是addCount()，但是呢都创建了新地址，都是自己的，互不干扰。

*/