/* 
    0、概念
    Generator 函数是 ES6 提供的一种异步编程解决方案。
    其有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

*/

/* 0、一个简单的Generator函数 */
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();

hw.next()   // {value: 'hello', done: false}
hw.next()   // {value: 'world', done: false}
hw.next()   // {value: 'ending', done: true}
hw.next()   // { value: undefined, done: true }