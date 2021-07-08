(function() { 
    var m = 0; 
    function getM(){ 
        return m; 
    }
    function seta(val){
        m = val;
    }
    window.g = getM;
    window.f = seta;
})();
f(100);
console.log(g());//100

/* 
这是立即执行函数，当js执行到(function {// code})();时, 由于(function {// code})是表达式, js会去对它求解得到返回值, 由于返回值是一个函数, 故而遇到()时, 便会被执行。然后把getM和seta给到了window，这时候呢，我想到了大佬总结的一句话：闭包找到的是同一地址中父级函数中对应变量最终的值。
*/