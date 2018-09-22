var scope = "outer";
function outer(){
    var scope = "inner";
    function inner(){
        var scope = "internal";
        return scope;
    }
    console.log("里面："+scope);
    return inner;
}
var fn = outer();
console.log("函数："+fn());
console.log("外面："+scope);