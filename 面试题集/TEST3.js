/* 
入参
let flatArr = [ 
{id: 1, title: "demo1", parent_id: 0},  
{id: 2, title: 'demo2', parent_id: 0}, 
{id: 3, title: 'demo2-1', parent_id: 2},  
{id: 4, title: 'demo3-1', parent_id: 3},  
{id: 5, title: 'demo4-1', parent_id: 4},  
{id: 6, title: 'demo2-2', parent_id: 2}, 
] 
输出
let JsonTree = [ 
    {id: 1, title: 'demo1', pid: 0},  
    {id: 2, title: 'demo2', pid: 0, children: [
        {id: 6, title: 'demo4-2', pid: 2},     
        {id: 3, title: 'demo2-1', pid: 2, children: [      
            { id: 4, title: 'demo3-1', pid: 3, children: [
                {id: 5, title: 'demo4-1', pid: 4}, 
            ]}, 
         ]}, 
     ]} 
];

*/

let flatArr = [ 
    {id: 1, title: "demo1", parent_id: 0},  
    {id: 2, title: 'demo2', parent_id: 0}, 
    {id: 3, title: 'demo2-1', parent_id: 2},  
    {id: 4, title: 'demo3-1', parent_id: 3},  
    {id: 5, title: 'demo4-1', parent_id: 4},  
    {id: 6, title: 'demo2-2', parent_id: 2}, 
] 

function setTree(data){
    return data.filter(p=>{
        let children = data.filter(c=> c.parent_id===p.id)
        children.length>0 ? p.children = children : ''
        return p.parent_id===0
    })
}

console.log(JSON.stringify(setTree(flatArr)))