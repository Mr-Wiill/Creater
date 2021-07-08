function fn(){
	var a = 3;
	return function(){
		return ++a;
	}
}
console.log(fn()());//4
console.log(fn()());//4
console.log(fn()());//4
var newFn = fn();
console.log(newFn());//4
console.log(newFn());//5
console.log(newFn());//6

/* 
相当于fn()()的直接调用都是在开辟一个新的地址，但是把它赋给一个变量的时候，地址就不会再改变了，这个时候就会发现输出只是在递增的
*/