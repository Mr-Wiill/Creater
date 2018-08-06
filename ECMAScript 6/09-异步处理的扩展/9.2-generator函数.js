/*
    generator函数：解决异步深度嵌套的问题，async
    语法：使用*定义
        function * fn(){         //返回一个generator对象
            yield '状态名';       //定义状态
        }

    扩展应用：
    1、配合解构赋值；
    2、配合扩展运算符（...）；
    3、配合Array.from();
*/

/*
    关于异步，解决方案：
    1、回调函数；
    2、事件监听；
    3、发布/订阅；
    4、Promise对象；
    5、generator函数；
*/

/*例1：定义一个generator函数*/
function * gen(worker){     //一个对象
    yield "hello";
    yield "world";
    yield `I am ${worker}`;
    return `welcome to Hangzhou`;
}
let g = gen("software Engineer");
/*
console.log(g.next());      //{ value: 'hello', done: false }   done表示状态的完成程度
console.log(g.next());      //{ value: 'world', done: false }
console.log(g.next());      //{ value: 'I am software Engineer', done: false }
console.log(g.next());      //{ value: undefined, done: true }  done:true表示完成
*/

for (let val of g){       //遍历值，不能遍历return
    console.log(val);
}



/*例2：generator函数应用*/
function * generator() {
    yield "welcome",
    yield "to",
    yield "Hangzhou"
}
let [a,b,c] = generator();          //解构赋值
console.log(`a:${a} b:${b} c:${c}`);    //输出 a:welcome b:to c:Hangzhou

let [d, ...e] = generator();        //剩余运算符
console.log(`d:${d} e:${e}`);   //输出 d:welcome e:to,Hangzhou

console.log(...generator());    //输出：welcome to Hangzhou

console.log(Array.from(generator()));   //[ 'welcome', 'to', 'Hangzhou' ]


/*
    总结：
    1、generator函数用于解决异步深度嵌套的问题；
    2、generator函数通过使用*来创建，其创建的是一个对象，使用yield 来创建状态；
    3、generator函数调用方法：let g = new generator(),  g.next()， 输出状态及完成情况；
    4、generator函数可以配合许多操作符使用，如解构赋值，剩余运算符，Array.from等；
*/