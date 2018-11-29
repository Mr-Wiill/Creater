/* jshint esversion: 6 */

/* 链表为空时的尾部添加：append(element) */
function LinkedList(element){
    // 列表头
    let head = null;
    // 链表长度
    let length = 0;
    // 辅助类：节点
    function NodeItem(element){
        this.element = element;
        this.next = null;
    }

    /* append(element) 链表尾添加元素 */
    this.append = (element)=>{
        let node = new NodeItem(element);   // 调用辅助类创建一个新节点
        // 链表头为空，即无节点
        if(head == null){   
            head = node;    // 把第一个添加的节点作为链表头
        }
        // 已存在节点
        else{
            let current = head;             // 定义一个current变量，存储head链表头的值，代表当前正在查找的值（从头部开始查找）
            while(current.next!==null){     // 当前查找节点的指针不为null（即不是最后一个），继续往后找，直到next=null循环结束
                current = current.next;     // 把下一个节点赋值给当前节点，即查找下一项
            }
            // while循环结束后，current已经到了最后一项（current.next=null）
            current.next = node;
        }
        length++;
    };

    /* assert(position,element) 向链表插入元素 */
    this.insert = (position, element)=>{
        let node = new NodeItem(element);       // 调用辅助类创建一个新元素节点（即插入的节点）
        // 越界
        if(position>-1 && position<length){
            if(position==0){                    // 插入链表头部(下标等于0)
                let current = head;             // head是要插入的下标节点，先把它存储在current变量里
                head = node;                    // 把新节点赋值给头部（即插入链表头）
                head.next = current;            // 新节点的指针指向原来的表头节点
            }else{
                let index = 0;                  // 代表当前查找的节点的下标
                let previous = null;            // 查找的前一个节点
                let current = head;             // 从链表头开始查找，先把它存储在current变量里
                while(index < position){        // 当查找的当前节点下标小于要插入的下标时，继续往后找
                    previous = current;         
                    current = current.next;     // 把当前的节点赋值给前一个节点，即向后查找下一个节点
                    index++;                    // 下标往后移动一位
                }
                // 直到index=position时，即找到了要插入的下标的节点
                previous.next = node;           // 前一个节点的指针指向新节点
                node.next = current;            // 新节点的指针指向根据下标找到的节点
                // 完成上面两步，即完成插入
            }
            length++;
        }
    };

    /* removeAt(position) 根据下标移除元素*/
    this.removeAt = (position)=>{
        
    };
    /* 查看链表  */ 
    this.getHead = ()=>{     
      return head;       
    };

}