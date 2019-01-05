/* jshint esversion: 6 */

/* 定义一个字典类 es5 */
function _Dictionary (){
    this.store = {};          // 字典
    this.add = add;           // 添加元素
    this.find = find;         // 查找元素
    this.remove = remove;     // 删除元素
    this.showAll = showAll;   // 显示字典元素
    this.count = count;       // 元素个数
    this.clear = clear;       // 清空字典
}

var add = function(key,value){
    this.store[key] = value;
};

var find = function(key){
    return this.store[key];
};

var remove =function(key){
    delete this.store[key];
};

var showAll = function(){
    return Object.values(this.store);
};

var count = function(){
    return Object.keys(this.store).length;
};

var clear = function(){
    this.store = {};
};


/* 定义一个字典类 es6 */

class Dictionary{
    constructor(){
        this.store = {};                // 字典
    }
    add(){
        this.store[key] = value;        // 添加元素
    }
    find(key){
        return this.store[key];         // 查找元素
    }
    remove(key){
        delete this.store[key];         // 删除元素
    }
    showAll(){
        return Object.values(this.store);           // 显示字典元素
    }
    count(){
        return Object.keys(this.store).length;      // 元素个数
    }
    clear(){
        this.store = {};                 // 清空字典
    }
}