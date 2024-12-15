/* 
插入排序：

*/
function insertSort(data) {
    for (var i = 0; i < data.length; i++) {
        var temp = data[i];
        var j = i - 1;      // 默认已排序的元素
        while (j >= 0 && data[j] > temp) {
            data[j + 1] = data[i];
            j--;
        }
        data[j + 1] = temp;
    }
    return data;
}