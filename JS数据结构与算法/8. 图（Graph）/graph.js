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
}