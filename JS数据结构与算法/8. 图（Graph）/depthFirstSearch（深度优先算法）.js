/* 
    深度优先算法：
*/
class DepthFirstSearch{
    constructor(graph,vertice){
        this.graph = graph              // 图（邻接表）
        this.vertice = vertice          // 顶点
    }
    search(){
        /* 编辑方法，把图的接点标记为已搜索1，未搜索0 */
        let tabGraph = {}
        let tab = ((list)=>{
            for(let key in list){
                tabGraph[key] = 0        // 都初始化为未搜索
            }
        })(this.graph)
        let loop = (current)=>{                 //循环遍历每个接点的连接点（递归）
            tabGraph[current] = 1
            for(let item of this.graph[current]){
                if(tabGraph[item] == 0){
                    loop(item)
                }
            }
            console.log(current)
        }
        loop(this.vertice)
    }
}