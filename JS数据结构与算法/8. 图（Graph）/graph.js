/* 一个无向图类 */
class Graph{
    constructor(){
        this.objList = {}           // 领接表（表示图）
    }
    /* 添加节点 */
    addNode(node){
        this.objList[node] = []     // 创建一个顶点，是一个数组，用于存储各个边
    }
    /* 添加边 */
    addEdge(a,b){
        this.objList[a].push(b)     // 创建双向连接
        this.objList[b].push(a)     // 如是有向图，则把这一项去掉
    }
    /* 求最短路径（利用广度优先算法） */
    minPath(vertice){
        let BFS = (v)=>{
            let distance = {}           // 距离
            let previous = {}           // 回溯点
            let tabGraph = {}           // 标记
            let tab =((list)=>{
                for(let key in list){
                    tabGraph[key] = 0        // 都初始化为未搜索
                    distance[key] = 0
                    previous[key] = null
                }
            })(this.objList)
            let queue = new Queue()
            queue.enqueue(v)         // 顶点入列
            tabGraph[v] = 1
            while(!queue.isEmpty()){            // 队列不为空
                let current = queue.dequeue()             // 从顶点开始查找
                for(let item of this.objList[current]){   // 遍历当前查找点的每个连接点
                    if(tabGraph[item] == 0){              // 如果标记为0，表示未入列
                        queue.enqueue(item)               // 入列
                        tabGraph[item] = 1                // 标记为已入列
                        distance[item] = distance[current] + 1
                        previous[item] = current
                    }
                }
                // console.log(current)        // 输出已遍历的顶点
            }
            // console.log(distance,previous)
            return {
                distance : distance,
                previous : previous
            }
        }
        const s = BFS(vertice)
    }
}