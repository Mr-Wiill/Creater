/* 
typeOf（）
typeof可用来检测数据类型: 需要注意的是typeof无法区分null、Array和 通常意义上的object。
原理：根据存储于内存里的机器码的前三位来判断，object的机器码为000000，由于null的机器码也为000开头，所以typeOf null为object。
*/

typeof 123 //number
typeof '123' //string
typeof true // boolean
typeof false //boolean
typeof undefined // undefined
typeof Math.abs // function
typeof function () {} // function

// 当遇上`null`、`Array`和通常意义上的`object`,都会返回 object
typeof null // object
typeof [] // object（所以判断数组时可以使用Array.isArray(arr)）
typeof {} // object

// 当数据使用了new关键字和包装对象以后，数据都会变成Object类型，不加new关键字时会被当作普通的函数处理。
typeof new Number(123); //'object'
typeof Number(123); // 'number'

typeof new Boolean(true); //'object'
typeof Boolean(true); // 'boolean'

typeof new String(123); // 'object'
typeof String(123); // 'string'

