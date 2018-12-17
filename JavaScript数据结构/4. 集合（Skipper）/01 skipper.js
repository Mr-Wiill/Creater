/* jshint esversion: 6 */
/* 定义一个集合类 */
function Skipper(){
    // 一个集合
    let item = {};

    // has(element) 查询集合是否存在某元素
    this.has = (element)=>{
        return item.hasOwnProperty(element);
    };

    // add(element) 向集合里添加新元素
    this.add = (element)=>{
        if(!this.has(element)){
            item[element] = element;
            return 'success';
        }else{
            return '该元素已存在';
        }
    };

    // remove(element) 删除某个元素
    this.remove = (element)=>{
        if(this.has(element)){
            delete item[element];
            return 'success';
        }else{
            return '该元素不存在';
        }
    };

    // clear() 清空集合元素
    this.clear = ()=>{
        item = {};
    };

    // size() 查看集合大小
    this.size = ()=>{
        return Object.keys(item).length;    // 由item对象的键组成的数组的长度
    };

    // values() 提取集合所有元素并组合成的一个数组
    this.values = ()=>{
        let arr = [];
        for(let key in item){
            arr.push(item[key]);
        }
        return arr;
    };

    // union() 并集
    this.union = (otherSet)=>{
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
    this.intersection = (otherSet)=>{
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
    this.difference = (otherSet)=>{
        let result = new Skipper();
        let arr = this.values();
        for(let i=0,len=arr.length; i<len; i++){
            if(!otherSet.has(arr[i])){       // 第一个集合的元素，但不是第二个集合的元素
                result.add(arr[i]);
            }
        }
        return result;
    }

    // 查询集合
    this.getSkipper = ()=>{
        return item;
    };

}