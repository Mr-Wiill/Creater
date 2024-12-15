/**
 * 例1：在构建函数中显式加上返回值，并且这个返回值是一个原始类型，这个返回值并没有作用
 * @param {string} name 姓名
 * @returns 
 */
function Test(name) {
    this.name = name
    return 1
}
const t = new Test('xxx')
console.log(t.name)     // 'xxx'    构造函数中返回一个原始值，然而这个返回值并没有作用


/**
 * 例2：在构造函数中返回一个对象，这个返回值会被正常使用
 * @param {string} name 姓名
 * @returns 
 */
function Test(name) {
    this.name = name
    console.log(this) // Test { name: 'xxx' }
    return { age: 26 }
}
const t1 = new Test('xxx')
console.log(t1) // { age: 26 }
console.log(t1t.name) // 'undefined'    构造函数如果返回值为一个对象，那么这个返回值会被正常使用