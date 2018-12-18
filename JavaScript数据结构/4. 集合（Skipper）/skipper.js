/* jshint esversion: 6 */
/* 定义一个集合类 */
function Skipper(){
    // 一个集合(值值对，如value : value)
    this.item = {};

    // has(element) 查询集合是否存在某元素
    this.has = has

    // add(element) 向集合里添加新元素
    this.add = add

    // remove(element) 删除某个元素
    this.remove = remove

    // clear() 清空集合元素
    this.clear = clear

    // size() 查看集合大小
    this.size = size

    // values() 提取集合所有元素并组合成的一个数组
    this.values = values

    // union() 并集
    this.union = union

    // intersection() 交集
    this.intersection = intersection

    // difference() 差集
    this.difference = difference

    // 查询集合
    this.getSkipper = ()=>{
        return item;
    };

}

// has(element) 查询集合是否存在某元素
function has (element){
    return this.item.hasOwnProperty(element);
};

// add(element) 向集合里添加新元素
function add(element){
    if(!this.has(element)){
        this.item[element] = element;
        return 'success';
    }else{
        return '该元素已存在';
    }
};

// remove(element) 删除某个元素
function remove(element){
    if(this.has(element)){
        delete this.item[element];
        return 'success';
    }else{
        return '该元素不存在';
    }
};

// clear() 清空集合元素
function clear(){
    this.item = {};
};

// size() 查看集合大小
function size(){
    return Object.keys(this.item).length;    // 由item对象的键组成的数组的长度
};

// values() 提取集合所有元素并组合成的一个数组
function values(){
    let arr = [];
    for(let key in item){
        arr.push(this.item[key]);
    }
    return arr;
};

// union() 并集
function union(otherSet){
    let result = new Skipper();
    let arr = this.values();       // 第一个集合
    // 把第一个集合元素取出，并添加到result数组
    for(let i=0,len=arr.length; i<len; i++ ){
        result.add(arr[i]);     // add()方法已做了去重
    }
    arr = otherSet.values();   // 第二个集合
    // 把第二个集合元素取出，并添加到result数组
    for(let i=0,len=arr.length; i<len; i++ ){
        result.add(arr[i]);    
    }
    return result;
};

// intersection() 交集
function intersection(otherSet){
    let result = new Skipper();
    let arr = this.values();
    for(let i=0,len=arr.length; i<len; i++){
        if(otherSet.has(arr[i])){       // 第一个集合的元素同时也是第二个集合的元素
            result.add(arr[i]);
        }
    }
    return result;
};

// difference() 差集
function difference(otherSet){
    let result = new Skipper();
    let arr = this.values();
    for(let i=0,len=arr.length; i<len; i++){
        if(!otherSet.has(arr[i])){       // 第一个集合的元素，但不是第二个集合的元素
            result.add(arr[i]);
        }
    }
    return result;
}