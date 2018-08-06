/*去掉数组中重复出现的数字，并按升序排列*/
function test(arr) {
    var result = [];
    for (var i=0,len=arr.length; i<len; i++) {
        if ( result.indexOf(arr[i]) == -1 ){
            result.push(arr[i]);
        }
    }
    return result.sort(function (a,b) {
        return a-b;
    });
}
console.log(test([10,1,3,5,5,8]));


/*ES6的方法，使用set去重*/
function f(arr) {
    let newArr = [...new Set(arr)];
    return newArr.sort(function (a,b) {
        return a-b;
    })
}
console.log(f([10,1,3,5,5,8]));

