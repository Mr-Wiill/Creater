/* 
快速排序：
1、选择数组第一个（或中间数）作为基数，并从数组中取出此基数；

2、准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器；

3、递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回。
*/
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var left = [];
    var right = [];
    // var pivotIndex = Math.floor(arr.length/2);       // 以中间元素为基准
    // var pivot = arr.splice(pivotIndex, 1)[0];
    var pivot = arr.splice(0, 1)[0];                // 以第一个元素为基准
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}