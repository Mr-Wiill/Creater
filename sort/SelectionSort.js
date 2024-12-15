/* 
选择排序：
首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，直到排序完毕。
平均时间复杂度O(n*n)
最好情况O(n*n)
最差情况O(n*n)
空间复杂度O(1)
稳定性：不稳定
*/
function selectionSort(data) {
    var temp, minIndex;
    for (var i = 0; i < data.length-1; i++) {
        minIndex = i;
        for (var j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        // 最小值与比较元素交换位置
        temp = data[minIndex];
        data[minIndex] = data[i];
        data[i] = temp
        console.log(`第${i}轮：${data}`)
    }
    return data;
}