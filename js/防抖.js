
function debounce(fn,delay){
    let timer = null    //借助闭包
    return function() {
        if(timer){
            //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
}

// 监听滚动条
function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
// 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置
window.onscroll = debounce(showTop,1000) 