/* jshint esversion: 6 */
/* 定义一个集合类 */
function Skipper(){
    this.item = {};         // 一个集合(值值对，如value : value)
    this.has = has;         // has(element) 查询集合是否存在某元素
    this.add = add;         // add(element) 向集合里添加新元素
    this.remove = remove;       // remove(element) 删除某个元素
    this.clear = clear;         // clear() 清空集合元素
    this.size = size;           // size() 查看集合大小
    this.values = values;       // values() 提取集合所有元素并组合成的一个数组           
    this.union = union;         // union() 并集
    this.intersection = intersection;    // intersection() 交集           
    this.difference = difference;        // difference() 差集
    this.getSkipper = getSkipper;        // 查看集合
}

// has(element) 查询集合是否存在某元素
var has = function(element){
    return this.item.hasOwnProperty(element);
};

// add(element) 向集合里添加新元素
var add = function(element){
    if(!this.has(element)){
        this.item[element] = element;
        return 'success';
    }else{
        return '该元素已存在';
    }
};

// remove(element) 删除某个元素
var remove = function(element){
    if(this.has(element)){
        delete this.item[element];
        return 'success';
    }else{
        return '该元素不存在';
    }
};

// clear() 清空集合元素
var clear = function(){
    this.item = {};
};

// size() 查看集合大小
var size = function(){
    return Object.keys(this.item).length;    // 由item对象的键组成的数组的长度
};

// values() 提取集合所有元素并组合成的一个数组
var values = function(){
    var arr = [];
    for(var key in item){
        arr.push(this.item[key]);
    }
    return arr;
};

// union() 并集
var union = function(otherSet){
    var result = new Skipper();
    var arr = this.values();       // 第一个集合
    // 把第一个集合元素取出，并添加到result数组
    for(var i=0,len=arr.length; i<len; i++ ){
        result.add(arr[i]);     // add()方法已做了去重
    }
    arr = otherSet.values();   // 第二个集合
    // 把第二个集合元素取出，并添加到result数组
    for(var i=0,len=arr.length; i<len; i++ ){
        result.add(arr[i]);    
    }
    return result;
};

// intersection() 交集
var intersection = function(otherSet){
    var result = new Skipper();
    var arr = this.values();
    for(var i=0,len=arr.length; i<len; i++){
        if(otherSet.has(arr[i])){       // 第一个集合的元素同时也是第二个集合的元素
            result.add(arr[i]);
        }
    }
    return result;
};

// difference() 差集
var difference = function(otherSet){
    var result = new Skipper();
    var arr = this.values();
    for(var i=0,len=arr.length; i<len; i++){
        if(!otherSet.has(arr[i])){       // 第一个集合的元素，但不是第二个集合的元素
            result.add(arr[i]);
        }
    }
    return result;
};

// 查看集合
var getSkipper = function(){     // 查询集合    
    return item;
};