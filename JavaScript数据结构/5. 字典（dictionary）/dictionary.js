/* jshint esversion: 6 */
// 定义一个字典类
function Dictionary (){
    this.store = {};     // 字典
    this.add = add;     // 添加元素
    this.find = find;   // 查找元素
    this.remove = remove;       // 删除元素
    this.showAll = showAll;     // 显示字典元素
    this.count = count;         // 元素个数
    this.clear = clear;         // 清空字典
}

var add = function(key,value){
    this.store[key] = value;
};

var find = function(key){
    return store[key];
};

var remove =function(key){
    delete this.store[key];
};

var showAll = function(){
    return Object.keys(store);
};

var count = function(){
    return Object.keys(store).length;
};

var clear = function(){
    this.store = {};
};
