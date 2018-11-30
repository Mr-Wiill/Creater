/* jshint esversion: 6 */

/* 链表为空时的尾部添加：append(element) */
function LinkedList(element){
    // 列表头
    let head = null;
    // 链表长度
    let length = 0;
    // 辅助类：结点
    function NodeItem(element){
        this.element = element;
        this.next = null;
    }

    /* append(element) 链表尾添加元素 */
    this.append = (element)=>{
        let node = new NodeItem(element);   // 调用辅助类创建一个新结点
        // 链表头为空，即无结点
        if(head == null){   
            head = node;    // 把第一个添加的结点作为链表头
        }
        // 已存在结点
        else{
            let current = head;             // 定义一个current变量，存储head链表头的值，代表当前正在查找的值（从头部开始查找）
            while(current.next!==null){     // 当前查找结点的指针不为null（即不是最后一个），继续往后找，直到next=null循环结束
                current = current.next;     // 把下一个结点赋值给当前结点，即查找下一项
            }
            // while循环结束后，current已经到了最后一项（current.next=null）
            current.next = node;
        }
        length++;
    };

    /* assert(position,element) 向链表插入元素 */
    this.insert = (position, element)=>{
        let node = new NodeItem(element);       // 调用辅助类创建一个新元素结点（即插入的结点）
        // 越界
        if(position>-1 && position<length){
            if(position==0){                    // 插入链表头部(下标等于0)
                let current = head;             // head是要插入的下标结点，先把它存储在current变量里
                head = node;                    // 把新结点赋值给头部（即插入链表头）
                head.next = current;            // 新结点的指针指向原来的表头结点
            }else{
                let index = 0;                  // 代表当前查找的结点的下标
                let previous = null;            // 查找的前一个结点
                let current = head;             // 从链表头开始查找，先把它存储在current变量里
                while(index < position){        // 当查找的当前结点下标小于要插入的下标时，继续往后找
                    previous = current;         
                    current = current.next;     // 把当前的结点赋值给前一个结点，即向后查找下一个结点
                    index++;                    // 下标往后移动一位
                }
                // 直到index=position时，即找到了要插入的下标的结点
                previous.next = node;           // 前一个结点的指针指向新结点
                node.next = current;            // 新结点的指针指向根据下标找到的结点
                // 完成上面两步，即完成插入
            }
            length++;
        }
    };

    /* 
        removeAt(position) 根据下标移除元素
        1）移除第1项（下标等于0），即使原链表第一个结点的指针作为新链表的第一项
        2）移除非第一项（下标大于0），即跳过当前结点，使前一个结点的指针 指向 当前节点的指针
    */
    this.removeAt = (position)=>{
        if(position>-1 && position<length){
            // 移除第一项
            if(position==0){                    
                let current = head;             // 把原来的表头，先存储到current变量里
                head = current.next;            // 使原表头的指针变成新表头，到达移除原表头的目的
            }
            // 移除非第一项
            else{
                let index = 0;                  // 当前项的下标
                let previous = null;            // 当前查找项的前一个结点
                let current = head;             // 从头部开始查找
                while(index<position){          // 当前结点的下标小于指定结点下标时，往后移动一项，继续查找
                    previous = current;         // 往后移动一项的方法就是，把后一项赋值给前一项
                    current = current.next;     
                    index++;
                }
                // 当index = position 时跳出循环，即找到了要移除的那一项
                previous.next = current.next;   // 跳过当前项，使前一项的指针指向当前项的指针
            }
            length--;   //长度减1
            return current;
        }
    };

    /* 
        indexOf(element) 查找某元素的下标 

    */
    this.indexOf = (element)=>{
        
    }

    /* 查看链表  */ 
    this.getHead = ()=>{     
      return head;       
    };

}