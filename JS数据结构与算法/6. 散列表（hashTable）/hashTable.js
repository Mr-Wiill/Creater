/* jshint esversion: 6 */

/* 普通散列表：存在一个问题，即通过散列函数计算出的key，有可能会相同 */
class HashTable{
    constructor(){
        this.table = []         // 散列表
    }
    /* 散列函数 */
    loseloseHashCode(key){      // 通过ASCII码转换生成key
        let hash = 0
        for (let i = 0; i< key.length; i++) {
           hash += key[i].charCodeAt()      // 计算key的ASCII码
        }
        return hash%37         // loseloseHashCode方法计算关键码的公式，即 ASCII码取余37   
    }
    put(key,value){
        const position = this.loseloseHashCode(key)       // 元素在散列表里的地址
        this.table[position] = value
    }
    remove(key){
        this.table[this.loseloseHashCode(key)] = undefined
    }
    get(key){
        return this.table[this.loseloseHashCode(key)]
    }
}

/* 哈希表-链表 ：应用分离链接法解决散列表key的冲突*/
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
        return hash%37         // loseloseHashCode方法计算关键码的公式，即 ASCII码取余37   
    }
    put(key,value){
        const position = this.loseloseHashCode(key)
        const l = new LinkedList()
        if(!this.table[position]){        // 还没有链表（此位置还没有值）  
            this.table[position] = l
            l.append(value)
        }
        else{                             // 已存在链表   
            this.table[position].append(value)
        }
    }
    get(key){
        const position = this.loseloseHashCode(key)
        
    }
}