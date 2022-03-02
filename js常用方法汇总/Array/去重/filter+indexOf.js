const arr = [4,5,3,4,6,5,8,6];
const b = arr.filter((item, index, arr) => arr.indexOf(item, 0) === index)  // [4, 5, 3, 6, 8]
