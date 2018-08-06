let obj = {
    name : "jack",
    age : 18,
    job : "Software Engineer"
};
let result = [];
for (let key in obj){
    result.push(obj[key]);
}
console.log(result[0]);