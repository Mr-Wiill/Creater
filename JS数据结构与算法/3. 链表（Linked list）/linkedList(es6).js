/* jshint esversion: 6 */

/*  结点类 */
class Node{
    constructor(element){
        this.element = element;    // 数据         
        this.next = null;          // 指针
    }
}

/* 链表类 */
class LinkedList{

    constructor(){
        this.head = null;       // 列表头
        this.length = 0;        // 链表长度
    }

    /* 添加元素  */
    append(element){
        let node = new Node(element);   // 调用辅助类创建一个新结点
        // 链表为空
        if(this.head == null){   
            this.head = node;    // 把第一个添加的结点作为链表头
        }
        // 已存在结点
        else{
            let current = this.head;        // 当前正在查找的节点（从头部开始查找）
            while(current.next!==null){     // 当前查找项的指针不为null（即不是最后一项），继续往后找，直到next=null循环结束
                current = current.next;     // 把下一项赋值给当前查找项，即查找下一项（循环的经典方法）
            }
            // while循环结束后，current已经到了最后一项（current.next=null）
            current.next = node;            // 插入新元素
        }
        length++;   // 长度加1
    }

    insert(element,position){
        let node = new Node(element);           // 定义一个新结点
        // 越界
        if(position>-1 && position<length){
            let current = this.head;            // 先把原链表头赋值给current
            // 链表头插入
            if(position==0){                    
                this.head = node;               // 插入的新节点作为链表头
                this.head.next = current;       // 链表头的指针指向原链表头，完成插入
            }
            // 非链表头插入
            else{
                let index = 0;                  // 当前查找项的下标
                let previous = null;            // 查找项的前一项
                // 当前项的下标小于目标项的下标时，继续循环
                while(index < position){        
                    previous = current;         // 查找下一个节点
                    current = current.next;     
                    index++;                    // 下标加1
                }
                // 直到index=position时，即找到了目标项
                previous.next = node;           // 目标项的前一项的指针指向插入项
                node.next = current;            // 插入项的指针指向目标项，完成插入
            }
            length++;       // 长度加1
        }
    }

    /* 根据下标移除元素 */
    removeAt(position){
        if(position>-1 && position<length){
            let current = this.head;  
            // 移除链表头
            if(position==0){                    
                this.head = current.next;       // 使原表头的指针变成新表头
            }
            // 移除非链表头
            else{
                let index = 0;                  // 当前项的下标
                let previous = null;            // 当前查找项的前一个结点
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
    }

    /* 查找某元素的下标 */
    indexOf(element){
        let index = 0;                          // 当前下标
        let current = this.head;                // 从头部开始查找
        while(current !== null){                // 当前项不等于null，表示还不是最后一项，继续循环
            if(element === current.element){    // 如果当前节点的值等于目标项
                return index;                   // 返回对应下标
            }
            current = current.next;             // 否则继续往后查找
            index++;                            // 下标加1
        }
        return -1;       // 若循环结束还没找到，返回-1，链表里不存在该元素
    }

    /* 直接移除某项元素（代码复用） */
    remove(element){
        return this.removeAt(this.indexOf(element));
    }

    /* 判断链表是否为空 */
    isEmpty(){
        return length === 0;
    }

    /* 查询链表的大小 */
    size(){
        return length;
    }
}