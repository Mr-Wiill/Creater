/* jshint esversion:6 */

/* 定义一个优先队列类 */
function PriorityQueue(){
    // 优先队列数组
    let items = [];
    // 定义一个辅助类（用于创建一项具有优先级的元素）
    function AuxiliaryClass(element,priority){
        this.element = element;         // 元素名称
        this.priority = priority;       // 优先级标识
    }
    // 优先队列元素入列的方法
    this.enqueue = (element,priority)=>{
        let queueItem = new AuxiliaryClass(element,priority);       // 调用辅助类创建一个元素
        let added = false;
        for(let i=0,len=items.length; i<len; i++){      
            if(queueItem.priority > items[i].priority){     // 与每一项做比较，若优先级比较高，则插入其前面，结束比较
                items.splice(i,0,queueItem);
                added = true;
                break;
            }
        }
        if(!added){             // 比队列的所有项都小，则插入尾部
            items.push(queueItem);
        }
    };
    this.getPriorityQueue = ()=>{
        return items;
    };
}