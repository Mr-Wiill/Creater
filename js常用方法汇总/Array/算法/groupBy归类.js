/* 
groupBy（）
把集合的元素按照key归类，key由传入的参数返回。
*/

const arr = [
    {name: '小孙', age: 18, score: 60, weight: 60},
    {name: '小王', age: 19, score: 70, weight: 55},
    {name: '小李', age: 18, score: 60, weight: 70},
    {name: '小刘', age: 20, score: 70, weight: 65},
    {name: '小赵', age: 18, score: 60, weight: 60},
    {name: '小钱', age: 19, score: 70, weight: 55},
    {name: '小周', age: 20, score: 60, weight: 50},
];
const example = (data, key) => {
return data.reduce(function(prev, cur) {
    (prev[cur[key]] = prev[cur[key]] || []).push(cur);
    return prev;
}, {});
};
console.log(example(arr, 'age'));

// object: {18: Array(3), 19: Array(2), 20: Array(2)}
/* 
18: Array(3)
    0: {name: "小孙", age: 18, score: 60, weight: 60}
    1: {name: "小李", age: 18, score: 60, weight: 70}
    2: {name: "小赵", age: 18, score: 60, weight: 60}
19: Array(2)
    0: {name: "小王", age: 19, score: 70, weight: 55}
    1: {name: "小钱", age: 19, score: 70, weight: 55}
20: Array(2)
    0: {name: "小刘", age: 20, score: 70, weight: 65}
    1: {name: "小周", age: 20, score: 60, weight: 50} 
*/

