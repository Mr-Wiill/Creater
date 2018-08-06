/*
    定义： let syml = Symbol();

    注意：
    1、前面不能加new；
    2、Symbol()返回的是一个唯一值；
        用做一个key，定义一些唯一或者私有的东西
    3、Symbol作为key，使用for in 遍历不出来；
*/

/*例1*/
let syml = Symbol();
console.log(typeof syml);


/*例2：symbol可以当做一个key*/
let syml1 = Symbol();
let json = {
    a : "apple",
    b : "banana",
    [syml1] : "aaa"
};
console.log(json[syml1]);       //可以作为json的key

for (let key in json){      //不能被for in 遍历
    console.log(key);
}


/*
    总结：
    1、Symbol作为一个独立的数据类型；
    2、Symbol返回的是一个唯一的值；
    3、Symbol可以作为对象的属性，但不能被for in 遍历；

*/