/* jshint esversion: 6 */
// 定义一个字典类
function Dictionary (){
    this.store = {};          // 字典
    this.add = add;           // 添加元素
    this.find = find;         // 查找元素
    this.remove = remove;     // 删除元素
    this.showAll = showAll;   // 显示字典元素
    this.count = count;       // 元素个数
    this.clear = clear;       // 清空字典
    this.getStore = getStore; // 查看字典
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

var getStore = function(){
    return this.store;
};
