/* jshint esversion:6 */

/* 定义一个队列类 ES5 */
/* function Queue(){
    let arr = [];                   //一个队列
    this.getQueue = ()=>{           //查询队列
        return arr;
    },
    this.enqueue = (element)=>{     //入列
        arr.push(element);
    },
    this.dequeue = ()=>{            //出列
        return arr.shift();
    },
    this.front = ()=>{              //查看队列头
        return arr[0]   
    },
    this.isEmpty = ()=>{            //判断队列是否为空
        return arr.length === 0;
    },
    this.size = ()=>{               //查询队列大小（即数组长度）
        return arr.length;
    }
    
} */

/* 定义一个队列类 ES6 */
class Queue{
    constructor(){
        this.arr = []               //一个队列
    }
    getQueue(){                     //查询队列
        return this.arr;             
    }
    enqueue(element){               //入列
        this.arr.push(element);      
    }
    dequeue(){                      //出列
        return this.arr.shift();
    }
    front(){                        //查看队列头
        return this.arr[0]  
    }
    isEmpty(){                      //判断队列是否为空
        return this.arr.length === 0;
    }
    size(){                         //查询队列大小（即数组长度）
        return this.arr.length;
    }
}