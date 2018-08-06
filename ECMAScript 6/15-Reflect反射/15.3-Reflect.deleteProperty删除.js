/*
    Reflect.deleteProperty(对象, 属性); 用于删除对象的属性，等效于 delete json.property
*/

let json = {
    a : 1,
    b : 2,
    c : 3
};
delete json.a;
console.log(json);

Reflect.deleteProperty(json, 'b');
console.log(json);