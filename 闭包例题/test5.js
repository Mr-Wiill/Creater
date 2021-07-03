function fnnn(){
    var arr = [];
    for(var i = 0;i < 5;i ++){
     arr[i] = function(){
         return i;
      }
    }
    return arr;
}
var list = fnnn();
for(var i = 0,len = list.length;i < len ; i ++){
console.log(list[i]());
}

/* 看清楚var定义的i，在函数中直接返回，在调用的时候i早就变成5了呀 */