/* 
    哈希表-链表 ：应用分离链接法解决散列表key的冲突
    原理：把散列表的值存储在一个链表里，具体实现步骤如下。
*/

/* 新节点 */
class _Node{
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

/* 散列表类 */
class HashTable_LinkedList{
    constructor(){
        this.table = []         // 散列表
    }
    /* 散列函数 */
    loseloseHashCode(key){      // 通过ASCII码转换生成key
        let hash = 0            
        for (let i = 0; i< key.length; i++) {
           hash += key[i].charCodeAt()      // 计算key的ASCII码
        }
        return hash%37         // loseloseHashCode方法计算关键码的公式，即 ASCII码的和 取余37   
    }
    /* 新增元素 */
    put(key,value){
        const position = this.loseloseHashCode(key)   // 元素在散列表中的存储地址
        const l = new LinkedList()
        const node = new _Node(key,value)
        if(!this.table[position]){        // 还没有链表（此位置还没有值）  
            this.table[position] = l
            l.append(node)                // 链表的append方法新增元素
        }
        else{                             // 已存在链表   
            this.table[position].append(node)
        }
    }
    /* 移除元素 */
    remove(key){
        const position = this.loseloseHashCode(key)
        if (this.table[position]) {                    // 已存在链表
            let current = this.table[position].head     // 链表
            while(current){
                if(current.element.key == key){
                    this.table[position].remove(current.element)     //调用链表的remove方法删除元素
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined        // 如果该链表为空，则设置此散列值为undefined，释放内存
                    }
                    return true
                }
                current = current.next
            }
        } else {
            return false        // 该元素不存在         
        }
    }
    /* 获取元素 */
    get(key){
        const position = this.loseloseHashCode(key)
        if(this.table[position]){
            let current = this.table[position].head
            while(current){
                if(current.element.key == key){
                    return current.element.value
                }
                current = current.next
            }
        }else{
            return undefined
        }
    }
}