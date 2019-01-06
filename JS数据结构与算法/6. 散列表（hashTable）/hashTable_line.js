/* 
    线性探查法，解决散列表的key冲突 
    原理：当遇到key地址冲突时，index++ 继续往后查找，直到找到空的地址，然后把散列值存储在改位置。
*/

/* 新节点类 */
class __Node{
    constructor(key,value){
        this.key = key
        this.value = value
    }
}

/* 散列表类 */
class HashTable_Line{
    constructor(){
        this.table = []         
    }
    /* 散列函数 */
    loseloseHashCode(key){
        let hash = 0 
        for(let i=0; i<key.length; i++){
            hash += key[i].charCodeAt()
        }
        return hash%37
    }
    put(key,value){
        const position = this.loseloseHashCode(key)
        const node = new __Node(key,value)
        if(this.table[position]){         // 如果该位置已经有值
            let index = position                    // 当前查找位置的下标
            while(this.table[index]!==undefined){   // 如果当前位置的值不为undefined，说明也有值
                index++                             // 继续查找下一个，下标加一
            }
            this.table[index] = node                // 直到当前位置没有值，存储在该位置
        } else{
            this.table[position] = node   // 如果没值，直接赋值
        }
    }
}