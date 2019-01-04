/* jshint esversion:6 */
/* 
击鼓传花的游戏：
一群人围城一圈，一朵花从某个人开始顺时针依次传递，第三次传递拿到花者出局，从下一位又重新开始，已旧是第三次传递拿到花者出局，游戏以这规则进行下去，直到只剩下一个人，即为最终胜利者 
*/
/*
循环队列方法解决问题：
用一个数组代表一圈人，第一次传花把数组第一项拿出插入到数组尾，第二次传花（在第一次基础上）又把数组的第一项拿出插入到数组尾，第三次（在第二次基础上）删除第一项（出局），依次进行下去，直到数组只剩下一项
*/


/* ES5方法 */
/* function PassTheParcel(people){
    let q = new Queue();           // 调用队列的操作方法
    for(let item of people){           
        q.enqueue(item);           //元素一个个入栈
    }
    while(q.size()>1){
        for(let i=0; i<2; i++ ){      //第一次和第二次传花
            q.enqueue(q.dequeue());        //拿出第一项插入尾部
        }
        q.dequeue();        //第三次出局     
    }
    return '最终胜利者' + q.getQueue();
} */

/* ES6 方法 */
class PassTheParcel{
    winner(attendees){                 //attendees一个数组，代表参与者
        let q = new Queue();           // 调用队列的操作方法
        for(let item of attendees){           
            q.enqueue(item);           //元素一个个入栈
        }
        while(q.size()>1){
            for(let i=0; i<2; i++ ){      //第一次和第二次传花
                q.enqueue(q.dequeue());        //拿出第一项插入尾部
            }
            q.dequeue();        //第三次出局     
        }
        return '最终胜利者是 ' + q.getQueue();
    }
}