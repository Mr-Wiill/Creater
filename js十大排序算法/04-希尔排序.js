/*
    先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：

    1）选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
    2）按增量序列个数k，对序列进行k 趟排序；
    3）每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
       仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
*/

function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {          // 动态定义间隔序列
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}
console.log(shellSort([1,1000000,652,2,318,23,62]));