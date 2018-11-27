/* jshint esversion: 6 */

/* 链表为空时的尾部添加：append(element) */
function LinkedList(element){
    // 列表头
    let head = null;
    // 链表长度
    let length = 0;
    // 辅助类：节点
    function Node(element){
        this.element = element;
        this.next = null;
    }
    // 链表尾添加元素
    this.append = (element)=>{
        let node = new Node(element);
        // 链表头为空，即无节点
        if(head == null){   
            head = node;    // 把第一个添加的元素作为链表头
        }
        // 已存在节点
        else{
            let current = head;     // 定义一个current变量，代表当前节点
            while(current.next!==null){     
                current = current.next;     // 从链表头开始查找，依次往后查找，直到最后一个节点（next=null）
            }
            // while循环结束后，current已经到了最后一项
            current.next = node;
        }
        length++;
    }
    this.getHead = ()=>{       // 查看链表  
      return head;       
    }

}