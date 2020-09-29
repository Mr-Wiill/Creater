// 请实现一个执行以下操作的函数“simplePoller”：

// -`simplePoller`函数接受两个参数：`queryFn`和`callback`
// -queryFn是一个返回true或false的函数
// -`callback`是当queryFn`返回true时应调用的函数
// -`simplePoller`应该定期调用`queryFn`
// -当queryFn返回false时，它会等待一段时间并再次调用queryFn，直到queryFn返回true为止。
// -从1秒开始，每次queryFn调用之间的等待间隔增加1.5倍
// -当queryFn返回true时，调用callback并退出函数

// -第1次：等待1秒
// -第2次：调用`queryFn`并返回`false`，等待1.5秒
// -第3次：调用`queryFn`并返回`false`，等待2.25秒
// -第4次：调用`queryFn`并返回`true`，执行`callback`并退出

// 确保`simplePoller`通过以下测试用例：

// -`simplePoller`应该在第一次调用queryFn`之前等待1秒
// -等待间隔是前一个间隔的1.5倍，第一次间隔（1秒）除外
// -应该允许同时调用“ simplePoller”，并且函数的调用不会相互干扰

function simplePoller(queryFn, callback) {
    let timer = 1000
    function fn(){
        setTimeout(()=>{
            if (!queryFn) {
                timer=timer*1.5
                fn()
            } else {
                callback
                return
            }
        }, timer)
    }
}