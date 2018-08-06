const fs = require('fs');

const readFile = function(file) {
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if (err) reject(err);
            resolve(data);
        })
    })
};

/*generator函数处理异常*/
function * gen() {
    yield readFile('data/aaa.txt');
    yield readFile('data/bbb.txt');
    yield readFile('data/ccc.txt');
}
let g = gen();
g.next().value.then( res=>{
    console.log(res.toString());
    return g.next().value;
}).then( res=>{
    console.log(res.toString());
    return g.next().value;
}).then( res=>{
    console.log(res.toString());
});