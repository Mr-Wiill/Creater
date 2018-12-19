/* jshint esversion: 6 */

/* 链表为空时的尾部添加：append(element) */
function LinkedList(element){
    // 列表头
    this.head = null;
    // 链表长度
    this.length = 0;

    // 辅助类：结点
    function NodeItem(element){
        this.element = element;
        this.next = null;
    }

    /* 查看链表  */ 
    this.getHead = ()=>{     
        return head;       
    };

    // 添加节点
    this.append = append;

    // 插入节点
    this.insert = insert;

    // 移除某个节点   
    this.removeAt = removeAt;

    // 查找某节点下标
    this.indexOf = indexOf;

    // 移除某个节点   
    this.remove = remove;

    // 判断是否为空
    this.isEmpty = isEmpty;

    // 查看大小
    this.size = size;
}

 /* 
    append(element) 链表尾添加元素 
    1）链表为空时，即插入的元素作为链表头（直接赋值）
    2）链表不为空时，从链表头开始查找，若当前查找项的指针不为null，继续查找下一项；直到当前查找项的指针等于null（最后一项），把新元素赋值当前项的指针（尾部插入）
*/
var append = function(element){
    var node = new NodeItem(element);   // 调用辅助类创建一个新结点
    // 链表为空
    if(this.head == null){   
        this.head = node;    // 把第一个添加的结点作为链表头
    }
    // 已存在结点
    else{
        var current = this.head;             // 定义一个current变量，存储head链表头的值，代表当前正在查找的值（从头部开始查找）
        while(current.next!==null){     // 当前查找项的指针不为null（即不是最后一项），继续往后找，直到next=null循环结束
            current = current.next;     // 把下一项赋值给当前查找项，即查找下一项（循环的经典方法）
        }
        // while循环结束后，current已经到了最后一项（current.next=null）
        current.next = node;            // 插入新元素
    }
    length++;
};

/* 
    insert(position,element) 向链表插入元素
    1）头部插入（下标等于0），即插入的元素作为链表头
    2）非头部插入，从头部开始查找，当前查找项的下标不等于目标项下标时，继续向后查找，直到查找项下标等于position，使当前查找项的指针指向插入项，插入项的指针指向当前项，完成插入。
*/
var insert = function(position, element){
    var node = new NodeItem(element);       // 调用辅助类创建一个新元素结点（即插入的元素）
    // 越界
    if(position>-1 && position<length){
        // 链表头插入
        if(position==0){                    
            var current = this.head;             // 先把原表头存储在current变量里
            this.head = node;                    // 把插入项赋值给表头（即插入链表头）
            this.head.next = current;            // 使插入项的指针指向原表头（链接起来）
        }
        // 非链表头插入
        else{
            var index = 0;                  // 当前查找项的下标
            var previous = null;            // 查找项的前一项
            var current = this.head;             // 从链表头开始查找，先把它存储在current变量里
            while(index < position){        // 查找的当前项下标小于目标项下标时，继续往后找
                previous = current;         // 当前项赋值给前一项
                current = current.next;     // 当前项的指针赋值给当前项，即查找项往后移动一项
                index++;                    // 下标加一
            }
            // 直到index=position时，即找到了目标项
            previous.next = node;           // 前一项的指针指向插入项
            node.next = current;            // 插入项的指针指向当前找到的目标项
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
var removeAt = function(position){
    if(position>-1 && position<length){
        var current = this.head;  
        // 移除第一项
        if(position==0){                    
            this.head = current.next;            // 使原表头的指针变成新表头，到达移除原表头的目的
        }
        // 移除非第一项
        else{
            var index = 0;                  // 当前项的下标
            var previous = null;            // 当前查找项的前一个结点
            // var current = head;             // 从头部开始查找
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
    1）从头部开始查找，如果当前查找项等于目标项就返回对应的下标，否则继续往后查找；
    2）若链表循环结束了还没找到，则返回-1（不存在）
*/
var indexOf = function(element){
    var index = 0;                          // 下标
    var current = this.head;                     // 从头部开始查找
    while(current !== null){                // 当前项不等于null，表示还不是最后一项，继续循环
        if(element === current.element){    // 当前项的值等于目标项
            return index;                   // 返回对应下标
        }
        current = current.next;             // 否则继续往后查找
        index++;                            // 下标加一
    }
    return -1;       // 若循环结束还没找到，返回-1，链表里不存在该元素
};

/* 
    remove(element) 直接移除某项元素（代码复用）
    1）调用indexOf(element)方法找到目标项的下标；
    2）调用removeAt(position)方法根据目标项的下标移除目标项 
*/
var remove = function(element){
    return this.removeAt(this.indexOf(element));
};

/* isEmpty() 判断链表是否为空 */
var isEmpty = function(){
    return length == 0;
};

/* size() 查询链表的大小 */
var size = ()=>{
    return length;
};