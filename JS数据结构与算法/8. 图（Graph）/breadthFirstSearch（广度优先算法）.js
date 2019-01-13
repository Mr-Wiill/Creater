/* 
    广度优先算法：从某个顶点开始，一层一层的向下遍历，层层堵截
*/
class BreadthFirstSearch{
    constructor(graph,vertice){
        this.graph = graph              // 图
        this.vertice = vertice          // 顶点
    }
    search(){   
        /* 标记方法：标记遍历过的图接点，分别为0未被检验（未入列）、1已检验（已入列）*/
        let tab = (list)=>{
            let tabList = {}
            for(let key in list){
                tabList[key] = 0        // 都初始化为未遍历
            }
            return tabList
        }
        let tabGraph = tab(this.graph)
        let queue = new Queue()
        queue.enqueue(this.vertice)         // 顶点入列
        tabGraph[this.vertice] = 1
        while(!queue.isEmpty()){            // 队列不为空
            let current = queue.dequeue()           // 从顶点开始查找
            for(let item of this.graph[current]){   // 遍历当前查找点的每个连接点
                if(tabGraph[item] == 0){            // 如果标记为0，表示未入列
                    queue.enqueue(item)             // 入列
                    tabGraph[item] = 1              // 标记为已入列
                }
            }
            console.log(current)        // 输出已遍历的顶点
        }
    }
}