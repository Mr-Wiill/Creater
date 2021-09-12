/* 
冒泡排序:
原理就是从把一个数组中的每一个数从前往后依次进行比较，然后根据大小交换位置，每一轮的比较都确定出一个当轮比较的最大值，
最终实现数组的大小排序。下面我们用JS实现冒泡排序。
假设数组中有n个数，则需要n轮，而每一轮中比较的次数都要减去已经确定的数值，即第i轮需要比较的次数为：n-i，
可以用一个嵌套for循环来实现。
*/
function bubbleSort(data) {
    var temp = 0;
    for (var i = 0; i < data.length-1; i++) {     // 遍历次数（确定次数）
        for (var j = 0; j < data.length-1-i; j++) {       // 每次遍历比较的次数
            console.log(`比较${data[j]}与${data[j + 1]}`)
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
        console.log(`第${i}轮：${data}`)
    }
    return data;
}
