const arr = [4,5,3,4,6,5,8,6];
function duplicate (arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
console.log(duplicate(arr))  //[4, 5, 3, 6, 8] 
