const arr = [4,5,3,4,6,5,8,6];
const a = arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
console.log(a) // [4, 5, 3, 6, 8]
