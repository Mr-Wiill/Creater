/* 
    delete
    删除一个数组成员，会形成空位，并不会影响length属性（改变原数组）,同样适用于对象。   
*/

//数组
const arr = [3,4,4,5,4,6,5,7];
delete arr[1];
conosle.log(arr); // [3, empty, 4, 5, 4, 6, 5, 7]

//对象
const obj = {name: 'pboebe',age: '23',sex: '男'};
delete obj.sex;
console.log(obj); // {name: "pboebe", age: "23"}

