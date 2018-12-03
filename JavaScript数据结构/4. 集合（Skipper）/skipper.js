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

    // delete(element) 删除某个元素
    this.delete = (element)=>{
        if(this.has(element)){
            delete item[element];
            return 'success';
        }else{
            return '该元素不存在';
        }
    };

    // 查询集合
    this.getSkipper = ()=>{
        return item;
    };

}