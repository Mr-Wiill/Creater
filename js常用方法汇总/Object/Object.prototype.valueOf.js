
/* 
返回当前对象对应的值。（Object.valueOf（）相当于Object.Prototype.ValueOf（））

们创建一个取代valueOf()方法的函数，但是需要注意的是方法必须不能传入参数 。 假设我们有个对象叫ObjectrType而我想为它创建一个valueOf()方法。下面的代码为valueOf()方法赋予了一个自定义函数:
*/

ObjectrType.prototype.valueOf = function() { return customValue; };


/* 
有了这样的一个方法，下一次每当ObjectrType要被转换为原始类型值时，JavaScript在此之前会自动调用自定义的valueOf()方法。 
valueOf()方法一般都会被JavaScript自动调用，但我们也可以像下面代码那样自己调用：
*/

ObjectrType.valueOf()

// valueOf同样适用于string，number， symbol，boolean，date。