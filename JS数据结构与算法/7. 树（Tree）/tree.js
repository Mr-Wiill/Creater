/* 一个节点类 */
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

/* 一个树类 */
class Tree{
    constructor(){
        this.root = null
    }
    /* 添加节点 */
    insert(value){
        const newNode = new Node(value)
        if(this.root == null){
            this.root = newNode
        } else{
            /* 插入节点（递归） */
            const insertNode = (node,newNode)=>{
                if(newNode.value < node.value){         // 左边插入
                    if(node.left == null){   
                        node.left = newNode             // 如果左节点为null，直接赋值        
                    } else{
                        insertNode(node.left,newNode)   // 否则，左节点与新节点比较大小（递归）
                    }
                } 
                else if(newNode.value > node.value){    // 右边插入（方法同上）
                    if(node.right == null){
                        node.right = newNode
                    } else{
                        insertNode(node.right,newNode)
                    }
                }
            }
            insertNode(this.root,newNode)
        }
    }
    /* 遍历节点 */
    traverse(){
        const print = (node)=>{
            console.log(node.value)      // 打印节点的值       
            // return node.value                   
        }
        /* 遍历节点（递归） */
        const traverseNode = (node,callback)=>{
            if(node == null) return    // 如果节点为null，退出递归
            // callback(node)                    // 前遍历（从上到下打印）
            traverseNode(node.left,callback)     // 遍历左节点
            // callback(node)                    // 中遍历（从中间开始印打印）
            traverseNode(node.right,callback)    // 遍历右节点
            callback(node)             // 后遍历（从下到上打印）
        }
        traverseNode(this.root,print)
    }
    /* 获取最小值 */
    min(){
        // 递归方法
        /* const getMin = (node)=>{
            if(node == null){
                return null
            } else{
                if(node.left == null){
                    console.log(node.value)
                    // return node.value
                }else{
                    getMin(node.left)
                }
            }
        }
        getMin(this.root) */

        // 循环方法
        const getTreeMin = (node)=>{
            if(!node) return null
            while(node && node.left){      // 一直往左查找，直到找到最左节点
                node = node.left
            }
            console.log(node.value)
            return node
        }
        getTreeMin(this.root)
    }
    /* 获取最大值 */
    max(){
        const getMax = (node)=>{
            if(!node) return null
            while(node && node.right){
                node = node.right
            }
            console.log(node.value)
            return node
        }
        getMax(this.root)
    }
    /* 移除节点（重构树） */
    remove(value){
        const removeNode = (node,value)=>{
            if(value < node.value){             /* 继续向左查找 */
                node.left = removeNode(node.left,value)         
                return node         // 返回重构后的树
            } 
            else if(value > node.value){        /* 继续向右查找 */
                node.right = removeNode(node.right,value)
                return node
            } 
            else{      /* node.value == value （删除node节点）*/
                if(node.left == null && node.right == null){      // 叶子节点（没有子级）
                    node = null
                    return node
                }
                else if(node.left == null && node.right){         // 只有一个右节点
                    return node.right
                }
                else if(node.left && node.right == null){         // 只有一个左节点
                    return node.left
                }
                else{                                             // 有两个子节点
                    // 查找最小值
                    const getMin = (node)=>{
                        if(node==null) return null
                        while(node && node.left){           
                            node = node.left
                        }
                        // console.log(node.value)
                        return node
                    }
                    const min = getMin(node.right)      // 右侧子树的最小节点
                    node.value = min.value              // 把要删除的节点替换为右侧子树的最小节点   
                    node.right = removeNode(node.right,min.value)    // 删除最小节点
                    return node
                }
            }
        }
        removeNode(this.root,value)
    }
}