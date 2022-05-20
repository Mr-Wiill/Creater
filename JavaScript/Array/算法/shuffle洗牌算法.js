/* 
shuffle()
用洗牌算法随机打乱一个集合。
*/

const arr = [1,2,3,4,5,6,7,8,9,10];
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
console.log(shuffle(arr))
// [10, 9, 7, 5, 6, 4, 1, 2, 8, 3]
