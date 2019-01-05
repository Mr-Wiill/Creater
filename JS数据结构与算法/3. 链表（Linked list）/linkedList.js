/* jshint esversion: 5 */

/* 链表类 */
function _LinkedList(element){
    this.head = null;       // 列表头
    this.length = 0;        // 链表长度

    this.append = append;           // 添加节点
    this.insert = insert;           // 插入节点
    this.removeAt = removeAt;       // 移除某个节点 
    this.indexOf = indexOf;         // 查找某节点下标
    this.remove = remove;           // 移除某个节点
    this.isEmpty = isEmpty;         // 判断是否为空
    this.size = size;               // 查看大小
}

/*  辅助类：结点 */
function _Node(element){         
    this.element = element;    // 数据         
    this.next = null;          // 指针
}

/* 
    append(element) 链表尾添加元素 
    1）链表为空时，即添加的元素作为链表头（直接赋值）
    2）链表不为空时，从链表尾添加，原链表尾的指针指向新增元素。
*/
var append = function(element){
    var _Node = new _Node(element);   // 调用辅助类创建一个新结点
    // 链表为空
    if(this.head == null){   
        this.head = _Node;    // 把第一个添加的结点作为链表头
    }
    // 已存在结点
    else{
        var current = this.head;        // 当前正在查找的节点（从头部开始查找）
        while(current.next!==null){     // 当前查找项的指针不为null（即不是最后一项），继续往后找，直到next=null循环结束
            current = current.next;     // 把下一项赋值给当前查找项，即查找下一项（循环的经典方法）
        }
        // while循环结束后，current已经到了最后一项（current.next=null）
        current.next = _Node;            // 插入新元素
    }
    length++;   // 长度加1
};

/* 
    insert(position,element) 向链表插入元素
    1）头部插入（下标等于0），即插入的元素作为链表头
    2）非头部插入，非头部插入，找到目标节点和目标节点的前一个节点（我们称之为前节点），
       使前节点的指针指向插入节点，而插入节点的指针指向目标节点，完成插入。
*/
var insert = function(position, element){
    var _Node = new _Node(element);           // 定义一个新结点
    // 越界
    if(position>-1 && position<length){
        var current = this.head;            // 先把原链表头赋值给current
        // 链表头插入
        if(position==0){                    
            this.head = _Node;               // 插入的新节点作为链表头
            this.head.next = current;       // 链表头的指针指向原链表头，完成插入
        }
        // 非链表头插入
        else{
            var index = 0;                  // 当前查找项的下标
            var previous = null;            // 查找项的前一项
            // 当前项的下标小于目标项的下标时，继续循环
            while(index < position){        
                previous = current;         // 查找下一个节点
                current = current.next;     
                index++;                    // 下标加1
            }
            // 直到index=position时，即找到了目标项
            previous.next = _Node;           // 目标项的前一项的指针指向插入项
            _Node.next = current;            // 插入项的指针指向目标项，完成插入
        }
        length++;       // 长度加1
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
        // 移除链表头
        if(position==0){                    
            this.head = current.next;       // 使原表头的指针变成新表头
        }
        // 移除非链表头
        else{
            var index = 0;                  // 当前项的下标
            var previous = null;            // 当前查找项的前一个结点
            // 当前结点的下标小于指定结点下标时，继续往后查找
            while(index<position){         
                previous = current;         // 查找下一个节点
                current = current.next;     
                index++;
            }
            // 当index = position 时跳出循环，即找到了要移除的那一项
            previous.next = current.next;   // 跳过当前项，使前一项的指针指向当前项的指针
        }
        length--;   //长度减1
        return current;         //返回移除项
    }
};

/* 
    indexOf(element) 查找某元素的下标 
    1）从头部开始查找，如果当前查找项等于目标项就返回对应的下标，否则继续往后查找；
    2）若链表循环结束了还没找到，则返回-1（不存在）
*/
var indexOf = function(element){
    var index = 0;                          // 当前下标
    var current = this.head;                // 从头部开始查找
    while(current !== null){                // 当前项不等于null，表示还不是最后一项，继续循环
        if(element === current.element){    // 如果当前节点的值等于目标项
            return index;                   // 返回对应下标
        }
        current = current.next;             // 否则继续往后查找
        index++;                            // 下标加1
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
    return this.length === 0;
};

/* size() 查询链表的大小 */
var size = function(){
    return this.length;
};