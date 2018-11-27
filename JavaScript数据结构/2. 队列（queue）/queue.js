/* jshint esversion:6 */

/* 定义一个队列类 */
function Queue(){
    /* 一个队列 */
    let arr = [];
    /* 查询队列 */
    this.getQueue = ()=>{
        return arr;
    },
    /* 入列 */       
    this.enqueue = (element)=>{
        arr.push(element);
    },
    /* 出列 */
    this.dequeue = ()=>{
        return arr.shift();
    },
    /* 查看队列头 */
    this.front = ()=>{
        return arr[0]   
    },
    /* 判断队列是否为空 */
    this.isEmpty = ()=>{
        return arr.length == 0;
    },
    /* 查询队列大小（即数组长度） */
    this.size = ()=>{
        return arr.length;
    }
    
}