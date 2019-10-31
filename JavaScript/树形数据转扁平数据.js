let res = []
const fn = (source)=>{
    source.forEach(el=>{
        el.children && el.children.length>0 ? fn(el.children) : ""
        res.push(el)
    })
}

const arr = [
    { id: "1", rank: 1 },
    { id: "2", rank: 1,
        children:[ 
            { id: "2.1", rank: 2 },
            { id: "2.2", rank: 2 } 
        ] 
    },
    { id: "3", rank:1,
        children:[ 
            { id: "3.1", rank:2, 
                children: [ 
                    { id:'3.1.1', rank:3,
                        children:[ 
                            { id: "3.1.1.1", rank: 4, 
                                children:[
                                    { id: "3.1.1.1.1", rank: 5 }
                                ] 
                            } 
                        ] 
                    } 
                ] 
            } 
        ] 
    }
]
fn(arr)
console.log(res)