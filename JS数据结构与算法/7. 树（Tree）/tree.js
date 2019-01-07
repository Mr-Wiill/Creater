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
            let node = this.root
            let insertNode = (function(node,newNode){
                console.log(222)
                if(newNode.value < node.value){         // 左边插入
                    console.log(333)
                    if(node.left == null){   
                        console.log(444)       
                        node.left = newNode.value       // 如果左节点为null，直接赋值        
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
            })()
        }
    }
}