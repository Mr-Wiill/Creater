/* 
    0、指数运算符（**）
    a ** b  // 表示a的b次方

    1、链判断运算符（?.）
    编程实务中，如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。
    链判断运算符?.有三种写法：
    obj?.prop // 对象属性是否存在
    obj?.[expr] // 同上
    func?.(...args) // 函数或对象方法是否存在

    2、Null 判断运算符（??）
    它的行为类似||（但是||包括空字符串或false或0），但是只有运算符左侧的值为null或undefined时，才会返回右侧的值。

    3、逻辑赋值运算符
    ES2021 引入了三个新的逻辑赋值运算符。
    // 或赋值运算符
    x ||= y
    // 等同于
    x || (x = y)

    // 与赋值运算符
    x &&= y
    // 等同于
    x && (x = y)

    // Null 赋值运算符
    x ??= y
    // 等同于
    x ?? (x = y)

*/

/* 0、指数运算符（**） */

2 ** 2 // 4
2 ** 3 // 8

// 多个指数运算符连用时，是从最右边开始计算的。
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512

// 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;


/* 1、链判断运算符（?.） */
// 读取message.body.user.firstName这个属性，安全的写法是写成下面这样。

// ES5
const firstName = (message
    && message.body
    && message.body.user
    && message.body.user.firstName) || 'default';

// ES6
const firstName1 = message?.body?.user?.firstName || 'default';

a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()

a?.[++x]
// 等同于
a == null ? undefined : a[++x]


/*  2、Null 判断运算符（??）*/

const headerText = response.settings.headerText ?? 'Hello, world!';
// 上面代码中，默认值只有在左侧属性值为null或undefined时，才会生效。

const animationDuration = response.settings?.animationDuration ?? 300;
// 上面代码中，如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300。